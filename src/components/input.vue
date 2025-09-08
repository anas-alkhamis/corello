<template>
  <div v-bind="inputWrapperProps || {}">
    <label :for="inputProps?.name">
      <span v-if="label">{{ label }}</span>
      <input :id="inputProps?.name" class="form-input" v-bind="inputProps" v v-model="model[inputProps!.name]" />
    </label>
    <message :validators="model?.v[inputProps.name].result.validators" :multi />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { InputHTMLAttributes, HTMLAttributes, PropType } from 'vue'

defineProps({ inputProps: Object as PropType<InputHTMLAttributes>, inputWrapperProps: Object as PropType<HTMLAttributes>, label: String, multi: Boolean })

const model = defineModel()
const Message = defineAsyncComponent(() => import('./message.vue'))
</script>
