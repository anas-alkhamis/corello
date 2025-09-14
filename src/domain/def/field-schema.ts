import type { IField } from '../meta/i-field'
import type { IFieldsSchema } from '../meta/i-fields-schema'
import { Field } from './field'
import { FieldBuilder } from './field-builder'

class FieldsSchema implements IFieldsSchema {
  schema: { [key: string]: IField } = {}
  addField(name: string, data: Partial<IField>): void {
    const fieldBuilder = new FieldBuilder()
    fieldBuilder.setType(data.type!)
    fieldBuilder.setPath(data.path!)
    fieldBuilder.setLabel(data.label!)
    fieldBuilder.setPlaceholder(data.placeholder!)
    fieldBuilder.setDescription(data.description!)
    fieldBuilder.setIsRequired(data.required!)
    fieldBuilder.dataServiceBuilder(data.dataService?.uniquePath!, data.dataService?.limitPerRequest, data.dataService?.defaultOffset!)
    this.schema[name] = new Field(fieldBuilder.getResult())
  }
  getResult(): { [key: string]: IField } {
    return this.schema
  }
}

export { FieldsSchema }
