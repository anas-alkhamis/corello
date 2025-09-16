import { Class, Dto, DtoBase, Factory } from 'corello'
import { ProductTypeEnum } from '../meta/enums/product-type'
import { User } from './user'
import { reactive } from 'vue'
import { Category } from './category'
import { Supplier } from './supplier'
import type { IProduct, IUser, ICategory, ISupplier, IFeature } from '../meta'
import { type IValidated, v, Validator, validatorFactory } from 'tamam'
import type { DeliveryTypeEnum } from '../meta/enums/delivery-type'

const required = () =>
  validatorFactory({
    required: new Validator((val: any) => {
      const isOk = val !== null && val !== undefined && val !== ''
      return { isOk, message: isOk ? '' : `validation.required.error` }
    }, false)
  })
const moreThanOrEqual = (base: number) =>
  validatorFactory({
    moreThanOrEqual: new Validator((val: any) => {
      const isOk = val.length >= base
      return { isOk, message: isOk ? '' : `validation.moreThanOrEqual.error` }
    })
  })

const positive = () =>
  validatorFactory({
    positive: new Validator((val: number) => {
      const isOk = !isNaN(val) && val > 0
      return { isOk, message: isOk ? '' : `validation.positive.error` }
    })
  })

const priceValidator = () =>
  validatorFactory({
    positive: new Validator((val: number) => {
      const isOk = val >= 0
      return { isOk, message: isOk ? '' : `validation.price.error` }
    }),
    max: new Validator((val: number) => {
      const isOk = val <= 10000
      return { isOk, message: isOk ? '' : `validation.price.tooHigh.error` }
    }, false)
  })

@Dto
@v()
class Product extends DtoBase<Product> implements IValidated<IProduct> {
  @required()
  name!: string

  @Factory((user: IUser) => new User({ ...user, name: `Owner-${user?.name}` }))
  owner!: IUser

  @Class(() => Category)
  category!: ICategory

  @Class(() => Supplier)
  supplier!: ISupplier

  type: ProductTypeEnum = ProductTypeEnum.None

  @positive()
  quantity: number = 0

  @priceValidator()
  price: number = 0

  deliveryType!: DeliveryTypeEnum
  @moreThanOrEqual(2)
  features: IFeature[] = []
  description?: string
  digitalCode?: string
  // get user() {
  //   return this.owner
  // }
  // get _user() {
  //   return this.owner
  // }

  validate(props?: (keyof IProduct)[] | undefined): Promise<Record<keyof IProduct, { value: any; result: any }>> {
    return this.validate(props)
  }
}

export { Product }
