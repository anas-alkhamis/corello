import type { IField } from './i-field'

interface IFieldsSchema {
  schema: { [key: string]: IField }

  addField(name: string, data: Partial<IField>): void
  getResult(): IFieldsSchema['schema']
}

export type { IFieldsSchema }
