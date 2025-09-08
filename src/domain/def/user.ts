import { Dto, DtoBase } from 'corello'
import { reactive } from 'vue'
import { type IValidated, v, Validator, validatorFactory } from 'tamam'
import type { IUser } from '../meta'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    }, false)
  })

@Dto
@v({ vMapFactory: () => reactive({}) })
class User extends DtoBase<User> implements IValidated<IUser> {
  @required()
  name!: string

  email?: string
  phone?: string
  address?: string

  validate(props?: (keyof IUser)[]): Promise<Record<keyof IUser, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { User }
