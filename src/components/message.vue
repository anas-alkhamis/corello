<template>
  <div v-for="value in getMessages(validators, multi)">
    <small>{{ value }}</small>
  </div>
</template>

<script setup lang="ts">
defineProps({ validators: Object, multi: Boolean })

const getMessages = (validators: any, multi: boolean) => {
  const messages = []
  for (const key in validators) {
    const item = validators[key]
    item?.status == 'done' && !item.isOk && messages.push(item.message)    
    if (!!messages.length && !multi) break
  }
  return messages
}
</script>
