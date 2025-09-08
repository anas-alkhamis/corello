import { Dto, DtoBase } from 'corello'
import type { IFeature } from '../meta'
import { type IValidated, type TValidationMap, v, Validator, validatorFactory } from 'tamam'
import { reactive } from 'vue'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    })
  })

@Dto
@v({ vMapFactory: () => reactive({}) })
class Feature extends DtoBase<Feature> implements IValidated<IFeature> {

  @required()
  key!: string
  @required()
  label!: string

  validate(props?: (keyof IFeature)[]): Promise<Record<keyof IFeature, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { Feature }
