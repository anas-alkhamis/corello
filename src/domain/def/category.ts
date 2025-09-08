import { Dto, DtoBase } from 'corello'
import { reactive } from 'vue'
import { type IValidated, v, Validator, validatorFactory } from 'tamam'
import type { ICategory } from '../meta'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    })
  })

@Dto
@v({ vMapFactory: () => reactive({}) })
class Category extends DtoBase<Category> implements IValidated<ICategory> {
  @required()
  title!: string

  description?: string

  validate(props?: (keyof ICategory)[]): Promise<Record<keyof ICategory, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { Category }
