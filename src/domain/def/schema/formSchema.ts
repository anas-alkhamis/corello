import { field } from './fields'

const schema = {
  password: {
    type: 'password',
    path: 'password',
    placeholder: { en: 'Enter password', ar: 'ادخل وحدة' },
    label: { en: 'Password', ar: 'كلمة السر' },
    description: { en: 'user password', ar: 'كلمة سر المسنخدم المستخدم' },
    required: true,
    serviceData: null
  },
  unit: {
    type: 'dropDownAsync',
    path: 'unit',
    placeholder: { en: 'Select Unit', ar: 'حدد وحدة' },
    label: { en: 'Unit', ar: 'وحدة' },
    description: { en: 'user unit', ar: 'وحدة المستخدم' },
    required: true,
    serviceData: {
      uniquePath: 'unit.id',
      limitPerRequest: 10,
      defaultOffset: 0
    }
  },
  groups: {
    type: 'dropDownAsync',
    path: 'groups',
    placeholder: { en: 'Select groups', ar: 'حدد المجموعات' },
    label: { en: 'Groups', ar: 'المجموعات' },
    description: { en: 'user groups', ar: 'مجموعات المستخدم' },
    required: true,
    serviceData: {
      uniquePath: 'groups[i].id', // multi selected item, path of id
      limitPerRequest: 10,
      defaultOffset: 0
    }
  }
}
