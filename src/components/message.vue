<template>
  <div v-for="value in getMessages(validators, multi)">
    <small>{{ value }}</small>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{ validators: T; multi?: boolean }>()

const getMessages = (validators: any, multi: boolean = false) => {
  const messages = []
  for (const key in validators) {
    const item = validators[key]
    item?.status == 'done' && !item.isOk && messages.push(item.message)
    if (!!messages.length && !multi) break
  }
  return messages
}
</script>
