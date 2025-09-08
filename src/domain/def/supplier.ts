import { Dto, DtoBase } from 'corello'
import { reactive } from 'vue'
import { type IValidated, v, Validator, validatorFactory } from 'tamam'
import type { ISupplier } from '../meta'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    })
  })

@Dto
@v({ vMapFactory: () => reactive({}) })
class Supplier extends DtoBase<Supplier> implements IValidated<ISupplier> {
  @required()
  companyName!: string

  contactName?: string
  contactEmail?: string

  validate(props?: (keyof ISupplier)[]): Promise<Record<keyof ISupplier, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { Supplier }
