import { User } from '../domain/def'
import { FieldsSchema } from '../domain/def/builders/field-schema'
import type { IUser } from '../domain/meta'
import { FieldTypeEnum } from '../domain/meta/enums/field-type'
import type { IUseFormOptions } from '../utilities/type'
import { useForm } from '../utilities/useForm'

const fieldsSchema = new FieldsSchema()
const user = new User()

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
const useUserForm = (options: IUseFormOptions<IUser>) => useForm<IUser>(user, fieldsSchema.getResult(), options)
export { useUserForm }
