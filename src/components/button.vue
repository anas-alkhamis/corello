<template>
  <button @click="() => onSubmit?.()">{{ isProcessing ? (title ? title : 'Loading..') : label ? label : 'Submit' }}</button>
</template>

<script setup lang="ts">
defineProps({ onSubmit: Function, isProcessing: Boolean, title: String, label: String })
</script>
