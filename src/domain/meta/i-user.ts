import type { ICategory } from './i-category'

export interface IUser {
  name: string
  password: string
  groups: string[]
  unit: string
  isAdmin: boolean
  email?: string
  phone?: string
  address?: string
  category?: ICategory
}
