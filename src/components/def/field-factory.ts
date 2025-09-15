import { defineAsyncComponent } from 'vue'
import { FieldTypeEnum } from '../../domain/meta/enums/field-type'

const componentMap: Record<string, any> = {
  [FieldTypeEnum.DropDown]: defineAsyncComponent(() => import('../dropdown-controller.vue')),
  [FieldTypeEnum.DropDownAsync]: defineAsyncComponent(() => import('../dropdown-async-controller.vue')),
  [FieldTypeEnum.Text]: defineAsyncComponent(() => import('../text-controller.vue')),
  [FieldTypeEnum.Number]: defineAsyncComponent(() => import('../number-controller.vue')),
  [FieldTypeEnum.Password]: defineAsyncComponent(() => import('../password-controller.vue')),
  [FieldTypeEnum.RadioGroup]: defineAsyncComponent(() => import('../radio-group-controller.vue')),
  [FieldTypeEnum.CheckboxGroup]: defineAsyncComponent(() => import('../checkbox-group-controller.vue')),
  [FieldTypeEnum.Switch]: defineAsyncComponent(() => import('../switch-controller.vue'))
}

class FieldFactory {
  getField(type: FieldTypeEnum) {
    const component = componentMap[type]

    if (!component) {
      throw new Error(`field type in not correct: ${type}`)
    }

    return component
  }
}

export { FieldFactory }
