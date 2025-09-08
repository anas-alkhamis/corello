import type { ProductTypeEnum } from './enums/product-type'
import type { ICategory } from './i-category'
import type { ISupplier } from './i-supplier'
import type { IUser } from './i-user'
export interface IProduct {
  name: string
  owner: IUser
  category: ICategory
  supplier: ISupplier
  type: ProductTypeEnum
  quantity: number
  price: number
  description?: string
}
