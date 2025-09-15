import type { IFormViewProps } from './type'

export const useForm = <T>(model: IFormViewProps<T>['model'], schema: IFormViewProps<T>['schema'], options: IFormViewProps<T>['options']) => {
  const snapshot = createSnapshot(model)
  const validate = async () => {
    const result = await model.validate(options.validationItems)
    let isValid = true

    for (const key in result) {
      const isOk = result[key].result?.isOk
      if (!isOk) {
        isValid = false
        break
      }
    }
    return isValid
  }
  const onSubmit = async () => {
    const result = await validate()
    console.log('is valid: ', result)
    console.log('data: ', model)

    if (!result) return
    if (options.submit) {
      await options.submit(JSON.stringify(model) as T)
    }
  }
  const onReset = () => {
    // add new method to dtobase class to reset the values
    // how to reset the values to the default
    snapshot.reset()
  }

  return {
    model,
    schema,
    onSubmit,
    onReset
  }
}

function safeClone<T>(val: T): T {
  try {
    return structuredClone(val)
  } catch {
    try {
      return JSON.parse(JSON.stringify(val)) // fallback
    } catch {
      return val // last resort: keep reference
    }
  }
}

export function createSnapshot<T extends object>(instance: T) {
  const defaults: Record<string, any> = {}

  Reflect.ownKeys(instance).forEach(key => {
    defaults[key as string] = safeClone((instance as any)[key])
  })

  const proto = Object.getPrototypeOf(instance)
  const descriptors = Object.getOwnPropertyDescriptors(proto)

  for (const [key, descriptor] of Object.entries(descriptors)) {
    if (typeof descriptor.get === 'function') {
      try {
        defaults[key] = safeClone((instance as any)[key])
      } catch {
        // ignore getters that throw
      }
    }
  }

  function reset() {
   Object.assign(instance, structuredClone(defaults))

  }

  return {
    getDefaults: () => safeClone(defaults),
    reset
  }
}
