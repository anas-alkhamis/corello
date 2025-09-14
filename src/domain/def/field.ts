import type { FieldTypeEnum } from '../meta/enums/field-type'
import type { IDataService, IField } from '../meta/i-field'
const defaultTranslation = { en: '', ar: '' }
class Field implements IField {
  type: FieldTypeEnum
  path: string
  label: Record<string, string>
  placeholder: Record<string, string>
  description: Record<string, string>
  required: boolean
  dataService: IDataService

  constructor({ type, path, label = defaultTranslation, placeholder = defaultTranslation, description = defaultTranslation, required = false, dataService }: Partial<IField>) {
    this.type = type!
    this.path = path!
    this.label = label
    this.placeholder = placeholder
    this.description = description
    this.required = required
    this.dataService = new DataService(dataService!)
  }
}
class DataService implements IDataService {
  uniquePath: string
  limitPerRequest: number
  defaultOffset: number

  constructor({ uniquePath, limitPerRequest = 10, defaultOffset = 0 }: Partial<IDataService>) {
    this.uniquePath = uniquePath!
    this.limitPerRequest = limitPerRequest
    this.defaultOffset = defaultOffset
  }
}

export { Field }
