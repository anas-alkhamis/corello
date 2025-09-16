import type { DtoBase } from 'corello'
import type { IValidated } from 'tamam'
import type { IFieldsSchema } from '../domain/meta/builder/i-fields-schema'
import type { ComputedRef, FunctionalComponent } from 'vue'
import type { IField } from '../domain/meta/builder/i-field'
export type NestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? `${K}` | `${K}.${NestedKeys<T[K]>}` : `${K}`
}[keyof T & string]
export interface IUseFormOptions<T> {
  defaultValues?: Partial<T>
  submit?: (data: T) => void | Promise<void>
  validationItems: NestedKeys<T>[]
}
export type TModelInstance<T> = DtoBase<T> & IValidated<T>
export type TValidatorEntry = {
  fn: Function
  items: string[]
}
export interface IFormViewProps<T> {
  Model: new (values: T) => TModelInstance<T>
  schema: IFieldsSchema['_schema']
  options: IUseFormOptions<T>
}
export interface IUseFormReturn<T> {
  onSubmit: () => Promise<void>
  onReset: () => void
  models: ComputedRef<
    {
      is: () => FunctionalComponent
      props: IField
      model: ComputedRef<Partial<T>>
      validators: T
    }[]
  >
}
