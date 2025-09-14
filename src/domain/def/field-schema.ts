import type { FieldTypeEnum } from '../meta/enums/field-type'
import type { IField } from '../meta/i-field'
import type { IFieldBuilder } from '../meta/i-field-builder'
import type { IFieldsSchema } from '../meta/i-fields-schema'
import { Field } from './field'
import { FieldBuilder } from './field-builder'

class FieldsSchema implements IFieldsSchema {
  _fieldBuilder!: IFieldBuilder
  _schema: IField[]

  constructor() {
    this._fieldBuilder = new FieldBuilder()
    this._schema = []
  }
  type(val: FieldTypeEnum): this {
    this._fieldBuilder.setType(val)
    return this
  }
  path(val: string): this {
    this._fieldBuilder.setPath(val)
    return this
  }
  label(val: Record<string, string>): this {
    this._fieldBuilder.setLabel(val)
    return this
  }
  placeholder(val: Record<string, string>): this {
    this._fieldBuilder.setPlaceholder(val)
    return this
  }
  description(val: Record<string, string>): this {
    this._fieldBuilder.setDescription(val)
    return this
  }
  required(val: boolean): this {
    this._fieldBuilder.setIsRequired(val)
    return this
  }
  dataService(uniquePath: string, limit: number, offset: number): this {
    this._fieldBuilder.dataServiceBuilder(uniquePath, limit, offset)
    return this
  }
  build(): void {
    this._schema.push(new Field(this._fieldBuilder.getResult()))
    this._fieldBuilder = new FieldBuilder()
  }

  getResult(): IField[] {
    return this._schema
  }
}

export { FieldsSchema }
