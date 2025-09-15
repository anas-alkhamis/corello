import type { FieldTypeEnum } from "../enums/field-type"

interface IField {
  type: FieldTypeEnum
  path: string
  label: Record<string, string>
  placeholder: Record<string, string>
  description: Record<string, string>
  required: boolean
  dataService: IDataService | null
}

interface IDataService {
  uniquePath: string
  limitPerRequest: number
  defaultOffset: number
}

export type { IField, IDataService }
