import type { FieldTypeEnum } from './enums/field-type'
import type { IField } from './i-field'
import type { IFieldBuilder } from './i-field-builder'

interface IFieldsSchema {
  _schema: IField[]
  _fieldBuilder: IFieldBuilder
  type(val: FieldTypeEnum): this
  path(val: string): this
  label(val: Record<string, string>): this
  placeholder(val: Record<string, string>): this
  description(val: Record<string, string>): this
  required(is: boolean): this
  dataService(uniquePath: string, limit: number, offset: number): this
  build(): void
  getResult(): IFieldsSchema['_schema']
}

export type { IFieldsSchema }
