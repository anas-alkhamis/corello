<template>
  <div>
    <label :for="path">
      <span v-if="label">{{ label['en'] }}</span>
      <input :id="path" class="form-input" type="text" :placeholder="placeholder['en']" v-model="model" />
    </label>
  </div>
</template>

<script setup lang="ts" generic="T">
import type { IField } from '../domain/meta/builder/i-field'

defineProps<IField & { validators: T }>()
const model = defineModel()
</script>
