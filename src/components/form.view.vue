<template>
  <fieldset>
    <template v-for="json in model?.models.value">
      <component :is="json.is()" v-bind="json.props" v-model="json.model.value" />
      <message :validators="json.validators" />
    </template>
    <div style="display: flex; gap: 6px; margin-top: 6px">
      <Button type="submit" :onClick="model?.onSubmit" />
      <Button type="reset" label="Reset" :onClick="model?.onReset" />
    </div>
  </fieldset>
</template>

<script setup lang="ts" generic="T">
import { defineAsyncComponent } from 'vue'

import type { IUseFormReturn } from '../utilities/type'
const model = defineModel<IUseFormReturn<T>>()

const Button = defineAsyncComponent(() => import('./button.vue'))
const Message = defineAsyncComponent(() => import('./message.vue'))
</script>
