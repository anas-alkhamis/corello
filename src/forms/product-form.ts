import { FieldsSchema } from '../domain/def/builders/field-schema'
import { FieldTypeEnum } from '../domain/meta/enums/field-type'

const fieldsSchema = new FieldsSchema()

fieldsSchema
  .type(FieldTypeEnum.Text)
  .path('supplier.companyName')
  .placeholder({ en: 'companyName', ar: 'companyName' })
  .label({ en: 'companyName', ar: 'companyName' })
  .description({ en: 'companyName', ar: 'companyName' })
  .required(true)
  .build()
fieldsSchema
  .type(FieldTypeEnum.Text)
  .path('name')
  .placeholder({ en: 'Enter name', ar: 'ادخل اسم ' })
  .label({ en: 'name', ar: 'الاسم' })
  .description({ en: 'user name', ar: 'اسم  ' })
  .required(true)
  .build()

const schema = fieldsSchema.getResult()

export { schema }
