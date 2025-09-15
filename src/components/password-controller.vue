<template>
  <div>
    <label :for="path">
      <span v-if="label">{{ label['en'] }}</span>
      <input :id="path" class="form-input" type="password" :placeholder="placeholder['en']" v-model="model" />
    </label>
  </div>
</template>

<script setup lang="ts" generic="T">
import { defineAsyncComponent } from 'vue'
import type { IField } from '../domain/meta/builder/i-field'

defineProps<IField & { validators: T }>()

const model = defineModel()
const Message = defineAsyncComponent(() => import('./message.vue'))
</script>
