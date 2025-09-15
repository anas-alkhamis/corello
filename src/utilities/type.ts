import type { DtoBase } from 'corello'
import type { IValidated } from 'tamam'
import type { IFieldsSchema } from '../domain/meta/builder/i-fields-schema'

export interface IUseFormOptions<T> {
  defaultValues?: Partial<T>
  submit?: (data: T) => void | Promise<void>
  validationItems: (keyof T)[]
}
export interface IFormViewProps<T> {
  model: DtoBase<T> & IValidated<T>
  schema: IFieldsSchema['_schema']
  options: IUseFormOptions<T>
}
