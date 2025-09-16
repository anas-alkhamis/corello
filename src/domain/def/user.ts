import { Dto, DtoBase } from 'corello'
import { reactive } from 'vue'
import { type IValidated, type TValidationMap, v, Validator, validatorFactory } from 'tamam'
import type { ICategory, IUser } from '../meta'
import type { Human } from '../human'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    }, false)
  })
const password = (minlength: number, isComplex: boolean) =>
  validatorFactory({
    length: new Validator((val: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isOk = val?.length >= minlength
          resolve({
            isOk,
            message: isOk ? '' : `validation.password.length.error`
          })
        }, 1000)
      })
    }),
    uppercase: new Validator((val: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isOk = !isComplex || /[A-Z]/.test(val)
          resolve({
            isOk,
            message: isOk ? '' : `validation.password.uppercase.error`
          })
        }, 1000)
      })
    }),
    lowercase: new Validator((val: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isOk = !isComplex || /[a-z]/.test(val)
          resolve({
            isOk,
            message: isOk ? '' : `validation.password.lowercase.error`
          })
        }, 1000)
      })
    }),
    specialChar: new Validator((val: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isOk = !isComplex || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val)
          resolve({
            isOk,
            message: isOk ? '' : `validation.password.specialChar.error`
          })
        }, 1000)
      })
    }),
    number: new Validator((val: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isOk = !isComplex || /\d/.test(val)
          resolve({
            isOk,
            message: isOk ? '' : `validation.password.number.error`
          })
        }, 1000)
      })
    })
  })

@Dto
@v()
class User extends DtoBase<IUser> implements IValidated<IUser> {
  v!: TValidationMap<IUser, 'required' | 'password'>
  @required()
  name!: string
  @required()
  @password(8, true)
  password!: string

  groups: string[] = []
  unit!: string

  isAdmin!: boolean
  email?: string
  phone?: string
  address?: string

  category!: ICategory
  validate(props?: (keyof IUser)[]): Promise<Record<keyof IUser, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { User }
