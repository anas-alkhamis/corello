<template>
  <fieldset>
    <template v-for="json in models">
      <component :is="json.is()" v-bind="json.props" v-model="json.model.value" />
      <message :validators="json.validators" />
    </template>
    <div style="display: flex; gap: 6px; margin-top: 6px">
      <Button type="submit" :onClick="onSubmit" />
      <Button type="reset" label="Reset" :onClick="onReset" />
    </div>
  </fieldset>
</template>

<script setup lang="ts" generic="T">
import { computed, defineAsyncComponent, defineProps } from 'vue'
import { FieldFactory } from '../domain/def/builders/field-factory'
import { resolve } from '../utilities/object-resolver'
import type { IFieldsSchema } from '../domain/meta/builder/i-fields-schema'
import type { IField } from '../domain/meta/builder/i-field'
const { schema, onReset, onSubmit } = defineProps<{ schema: IFieldsSchema['_schema']; onSubmit: () => void; onReset: () => void }>()
const fieldFactory = new FieldFactory()
const model = defineModel<T>()
const createModel = <T>(x: IField, model: T) =>
  computed({
    get() {
      return resolve(x, x.path)
    },
    set: (value: Partial<T>) => {
      const total = x.path.split('.')
      const last: string = total.pop()!
      if (total.length > 0) {
        const targetObject = resolve(model, total.join(''))
        targetObject[last] = value
      } else {
        ;(model as Record<string, any>)[last] = value
      }
    }
  })
const createValidators = <T>(x: IField, model: T) => {
  const total = x.path.split('.')
  return model.v[total[0]].result.validators
}

const models = computed(() => {
  return schema.map(x => ({ is: () => fieldFactory.getField(x.type), props: x, model: createModel(x, model.value), validators: createValidators(x, model.value) }))
})

const Button = defineAsyncComponent(() => import('./button.vue'))
const Message = defineAsyncComponent(() => import('./message.vue'))
</script>
