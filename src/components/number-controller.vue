<template>
  <div>number-controller</div>
  {{ path }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { IField } from '../domain/meta/builder/i-field'
defineProps<IField>()

const model = defineModel()
</script>
