import type { FieldTypeEnum } from './enums/field-type'
import type { IDataService, IField } from './i-field'

interface IFieldBuilder {
  _type: FieldTypeEnum
  _path: string
  _label: Record<string, string>
  _placeholder: Record<string, string>
  _description: Record<string, string>
  _required: boolean
  _dataService: IDataService
  setType(val: FieldTypeEnum): void
  setPath(val: string): void
  setLabel(val: Record<string, string>): void
  setPlaceholder(val: Record<string, string>): void
  setDescription(val: Record<string, string>): void
  setIsRequired(is: boolean): void
  dataServiceBuilder(uniquePath: string, limit: number, offset: number): void

  getResult(): IField
}

interface IDataServiceBuilder {
  _uniquePath: string
  _limitPerRequest: number
  _defaultOffset: number
  setUniquePath(path: string): void
  setLimitPerRequest(limit: number): void
  setDefaultOffset(offset: number): void
  build(): IDataService
}

export type { IFieldBuilder, IDataServiceBuilder }
