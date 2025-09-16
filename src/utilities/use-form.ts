import { computed, reactive } from 'vue'
import { FieldFactory } from '../domain/def/builders/field-factory'
import { resolve } from './object-resolver'
import type { IField } from '../domain/meta/builder/i-field'
import type { IFormViewProps, IUseFormReturn, NestedKeys, TModelInstance, TValidatorEntry } from './type'

export const useForm = <T>(Model: IFormViewProps<T>['Model'], schema: IFormViewProps<T>['schema'], options: IFormViewProps<T>['options']): IUseFormReturn<T> => {
  const fieldFactory = new FieldFactory()
  const instance = reactive({ model: new Model(options?.defaultValues as T) })

  // validate form
  const collectDeepValidators = <T>(model: TModelInstance<T>, validationItems: NestedKeys<T>[]): Record<string, TValidatorEntry> => {
    const validators: Record<string, TValidatorEntry> = {}

    validationItems.forEach(item => {
      const pathParts = item.split('.')
      const last = pathParts.pop()!
      const currentPath = pathParts.join('.')
      const currentModel = currentPath ? resolve(model, currentPath) : model
      const fn = currentModel.validate
      const key = currentPath || item

      if (validators[key]) {
        validators[key].items.push(last)
      } else {
        validators[key] = {
          fn: fn.bind(currentModel),
          items: [last]
        }
      }
    })

    return validators
  }

  const validate = async () => {
    const validators = collectDeepValidators(instance.model, options.validationItems)
    let isValid = true

    for (const key in validators) {
      const val = validators[key]
      const result = await val.fn(val.items)
      if (isValid) {
        for (const key in result) {
          if (!!val.items.length && !val.items.includes(key)) continue
          const isOk = result[key].result?.isOk
          if (!isOk) {
            isValid = false
          }
        }
      }
    }

    return isValid
  }
  //  run validate function and submit
  const onSubmit = async () => {
    const result = await validate()

    if (!result) return
    if (options.submit) {
      await options.submit(JSON.stringify(instance.model) as T)
    }
  }
  // reset instance to default value
  const onReset = () => {
    instance.model = new Model(options?.defaultValues as T)
  }
  // create modals for form view
  const createModel = <T>(x: IField, model: T) =>
    computed({
      get() {
        return resolve(model, x.path)
      },
      set: (value: Partial<T>) => {
        const total = x.path.split('.')
        const last: string = total.pop()!
        if (total.length > 0) {
          const targetObject = resolve(model, total.join(''))
          targetObject[last] = value
        } else {
          ;(model as Record<string, any>)[last] = value
        }
      }
    })
  // create validators access for message
  const createValidators = <T>(x: IField, model: TModelInstance<T>) => {
    const total = x.path.split('.')
    if (total.length == 1) {
      return model.v[x.path].result.validators
    }
    return resolve(model, total.slice(0, -1).join('')).v[total[total.length - 1]].result.validators
  }

  // structure of modals
  const models = computed(() => {
    return schema.map(x => ({ is: () => fieldFactory.createField(x.type), props: x, model: createModel(x, instance.model), validators: createValidators(x, instance.model) }))
  })

  return { onSubmit, onReset, models }
}
