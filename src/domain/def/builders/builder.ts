// create use case for builder pattern
// demo how builder  work
// object => simple
// product
// some properties

import type { ICategory, IProduct, ISupplier, IUser } from '../../meta'
import { DeliveryTypeEnum } from '../../meta/enums/delivery-type'
import type { ProductTypeEnum } from '../../meta/enums/product-type'
import { Category } from '../category'
import { Product } from '../product'
import { Supplier } from '../supplier'
import { User } from '../user'

/* What is builder */
// builder pattern is a creational pattern that separate the creational from the representations,
// can use same creation process to create different representations
// focus on how to build complex object by steps
//-------------------------------------------------------------------
// instantiate object at runtime
// create different presentation of complex object
// simplified creating class that creating complex object

//-------------------------------------------------------------------
// late for form builder =>

//--------------------------------------------------------------------
// creating product builder class => concert class product ==> interface for the builder ==> builder class => Director

interface IBaseProductBuilder {
  setName(val: string): void
  setOwner(val: IUser): void
  setCategory(val: ICategory): void
  setType(val: ProductTypeEnum): void
  setSupplier(val: ISupplier): void
  setPrice(val: number): void
  setDeliveryType(val: DeliveryTypeEnum): void
  setDescription(val: string): void
  setDigitalCode(val: string): void
  getResult(): IProduct
}

class BaseProductBuilder implements IBaseProductBuilder {
  product!: IProduct

  constructor() {
    this.product = new Product()
  }
  setName(val: string): void {
    this.product.name = val
  }
  setOwner(val: IUser): void {
    this.product.owner = val
  }
  setType(val: ProductTypeEnum): void {
    this.product.type = val
  }
  setCategory(val: ICategory): void {
    this.product.category = val
  }
  setSupplier(val: ISupplier): void {
    this.product.supplier = val
  }
  setPrice(val: number): void {
    this.product.price = val
  }
  setDeliveryType(val: DeliveryTypeEnum): void {
    this.product.deliveryType = val
  }
  setDescription(val: string): void {
    this.product.description = val
  }
  setDigitalCode(val: string): void {
    this.product.digitalCode = val
  }
  getResult() {
    return this.product
  }
}

class BigBoxMetalDirector {
  static construct(): IProduct {
    const builder = new BaseProductBuilder()
    builder.setName('metal box')
    builder.setOwner(new User({ name: 'box-group' }))
    builder.setCategory(new Category({ title: 'Vehicle' }))
    builder.setSupplier(
      new Supplier({
        companyName: 'box-abc',
        contactName: 'abc-box',
        contactEmail: 'abc.box@hot.com'
      })
    )
    builder.setPrice(25)
    builder.setDeliveryType(DeliveryTypeEnum.Physical)
    builder.setDescription('big size metal box')
    return builder.product
  }
}
class Visa10CardDirector {
  static construct(): IProduct {
    const builder = new BaseProductBuilder()
    builder.setName('Visa')
    builder.setCategory(new Category({ title: 'Digital number' }))
    builder.setSupplier(
      new Supplier({
        companyName: 'Online',
        contactName: 'Online',
        contactEmail: 'Online'
      })
    )
    builder.setPrice(10)
    builder.setDeliveryType(DeliveryTypeEnum.Digital)
    builder.setDescription('visa 10 $ card')
    builder.setDigitalCode('generated-unique-id')
    return builder.product
  }
}

export { BigBoxMetalDirector, Visa10CardDirector }
