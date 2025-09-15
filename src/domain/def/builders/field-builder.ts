import type { IDataService, IField } from '../../meta/builder/i-field'
import type { IDataServiceBuilder, IFieldBuilder } from '../../meta/builder/i-field-builder'
import type { FieldTypeEnum } from '../../meta/enums/field-type'

class DataServiceBuilder implements IDataServiceBuilder {
  _uniquePath!: string
  _limitPerRequest!: number
  _defaultOffset!: number

  setUniquePath(path: string): this {
    this._uniquePath = path
    return this
  }

  setLimitPerRequest(limit: number): this {
    this._limitPerRequest = limit
    return this
  }

  setDefaultOffset(offset: number): this {
    this._defaultOffset = offset
    return this
  }

  build(): IDataService {
    return {
      uniquePath: this._uniquePath,
      limitPerRequest: this._limitPerRequest,
      defaultOffset: this._defaultOffset
    }
  }
}

class FieldBuilder implements IFieldBuilder {
  _type!: FieldTypeEnum
  _path!: string
  _label!: Record<string, string>
  _placeholder!: Record<string, string>
  _description!: Record<string, string>
  _required!: boolean
  _dataService!: IDataService

  setType(val: FieldTypeEnum): void {
    this._type = val
  }

  setPath(val: string): void {
    this._path = val
  }

  setLabel(val: Record<string, string>): void {
    this._label = val
  }

  setPlaceholder(val: Record<string, string>): void {
    this._placeholder = val
  }

  setDescription(val: Record<string, string>): void {
    this._description = val
  }

  setIsRequired(is: boolean): void {
    this._required = is
  }

  dataServiceBuilder(uniquePath: string, limit: number = 10, offset: number = 0): void {
    const builder = new DataServiceBuilder()
    builder.setUniquePath(uniquePath)
    builder.setDefaultOffset(offset)
    builder.setLimitPerRequest(limit)
    this._dataService = builder.build()
  }

  getResult(): IField {
    return {
      type: this._type,
      path: this._path,
      label: this._label,
      placeholder: this._placeholder,
      description: this._description,
      required: this._required,
      dataService: this._dataService
    }
  }
}

export { FieldBuilder }
