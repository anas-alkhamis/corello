import { FieldsSchema } from '../domain/def/builders/field-schema'
import { FieldTypeEnum } from '../domain/meta/enums/field-type'

const fieldsSchema = new FieldsSchema()

fieldsSchema
  .type(FieldTypeEnum.Password)
  .path('password')
  .placeholder({ en: 'Enter password', ar: 'ادخل وحدة' })
  .label({ en: 'Password', ar: 'كلمة السر' })
  .description({ en: 'user password', ar: 'كلمة سر المسنخدم المستخدم' })
  .required(false)
  .build()
fieldsSchema
  .type(FieldTypeEnum.Text)
  .path('name')
  .placeholder({ en: 'Enter name', ar: 'ادخل اسم المستخدم' })
  .label({ en: 'name', ar: 'كلمة السر' })
  .description({ en: 'user name', ar: 'اسم المستخدم ' })
  .required(true)
  .build()
const schema = fieldsSchema.getResult()
export { schema }
