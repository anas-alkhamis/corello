<template>
  <div>text-controller</div>
  {{ props.path }}
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { props as selectedProps } from './def/field-props'
const props = defineProps(selectedProps)
</script>
