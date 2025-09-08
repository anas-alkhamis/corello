<template>
  <div class="container form">
    <form-input v-model="user" :input-props="{ placeholder: 'Username', name: 'name' }" label="Username" />
    <form-input v-model="user" :input-props="{ placeholder: 'Password', name: 'password' }" label="Password" multi />
    <submit-button :on-submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { User } from '../domain/def'

const user = new User()

const onSubmit = async () => {
  const result = await user.validate()
  let isValid = true
  for (const key in result) {
    const isOk = result[key].result?.isOk
    if (!isOk) {
      isValid = false
      break
    }
  }
  if (!isValid) return
  console.log('its valid')
}

const SubmitButton = defineAsyncComponent(() => import('./button.vue'))
const FormInput = defineAsyncComponent(() => import('./input.vue'))
</script>
