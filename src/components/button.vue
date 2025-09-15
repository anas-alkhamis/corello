<template>
  <button @click="() => onClick?.()" :type>{{ isProcessing ? (title ? title : 'Loading..') : label ? label : 'Submit' }}</button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({ onClick: Function, isProcessing: Boolean, title: String, label: String, type: String as PropType<'button' | 'submit' | 'reset' | undefined> })
</script>
