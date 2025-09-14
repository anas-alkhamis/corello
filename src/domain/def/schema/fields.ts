export const field = {
  type: 'text', // number, email,dropdown
  path: 'user.name', // path to access a property in a model
  placeholder: { en: '', ar: '' },
  label: { en: '', ar: '' },
  description: { en: '', ar: '' },
  required: true, // value should be exist
  serviceData: {
    uniquePath: 'user.name.id',
    limitPerRequest: 10,
    defaultOffset: 0
  }
}
