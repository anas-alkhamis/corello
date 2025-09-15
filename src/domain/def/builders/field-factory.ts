import { defineAsyncComponent } from 'vue'
import { FieldTypeEnum } from '../../meta/enums/field-type'

const componentMap: Record<string, any> = {
  [FieldTypeEnum.DropDown]: defineAsyncComponent(() => import('../../../components/dropdown-controller.vue')),
  [FieldTypeEnum.DropDownAsync]: defineAsyncComponent(() => import('../../../components/dropdown-async-controller.vue')),
  [FieldTypeEnum.Text]: defineAsyncComponent(() => import('../../../components/text-controller.vue')),
  [FieldTypeEnum.Number]: defineAsyncComponent(() => import('../../../components/number-controller.vue')),
  [FieldTypeEnum.Password]: defineAsyncComponent(() => import('../../../components/password-controller.vue')),
  [FieldTypeEnum.RadioGroup]: defineAsyncComponent(() => import('../../../components/radio-group-controller.vue')),
  [FieldTypeEnum.CheckboxGroup]: defineAsyncComponent(() => import('../../../components/checkbox-group-controller.vue')),
  [FieldTypeEnum.Switch]: defineAsyncComponent(() => import('../../../components/switch-controller.vue'))
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
