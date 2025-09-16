import { defineAsyncComponent } from 'vue'
import { FieldTypeEnum } from '../../meta/enums/field-type'

const componentMap: Record<string, any> = {
  [FieldTypeEnum.Text]: defineAsyncComponent(() => import('../../../components/text-input-control.vue')),
  [FieldTypeEnum.Password]: defineAsyncComponent(() => import('../../../components/password-input-control.vue'))
}

class FieldFactory {
  createField(type: FieldTypeEnum) {
    const component = componentMap[type]

    if (!component) {
      throw new Error(`field type in not correct: ${type}`)
    }

    return component
  }
}

export { FieldFactory }
