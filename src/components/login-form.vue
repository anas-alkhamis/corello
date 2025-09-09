<template>
  <div class="container form">
    <form-input v-model="user" :input-props="{ placeholder: 'Username', name: 'name' }" label="Username" />
    <form-input v-model="user" :input-props="{ placeholder: 'Password', name: 'password' }" label="Password" multi />
    <submit-button :on-submit="onSubmit" />
  </div>
  <hr />
  <div v-for="(value, key) in smallTeaGlass">{{ key }}: {{ value }}</div>
  <hr />
  <div v-for="(value, key) in blackLargeCoffeeGlass">{{ key }}: {{ value }}</div>
  <hr />
  <div v-for="(value, key) in yellowMediumWater">{{ key }}: {{ value }}</div>
  <hr />
  <div v-for="(value, key) in smallWaterMeta">{{ key }}: {{ value }}</div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { User } from '../domain/def'
import { BigBoxMetalDirector, Visa10CardDirector } from '../domain/def/builders/builder'
import { BlackLargeCoffeeGlassDirector, SmallTeaGlassDirector, SmallWaterMetalDirector, YellowMediumWaterGlassDirector } from '../domain/def/builders/cup-builder'

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
const box = BigBoxMetalDirector.construct()
const visa = Visa10CardDirector.construct()
console.log(box, visa)

const smallTeaGlass = SmallTeaGlassDirector.construct()
const blackLargeCoffeeGlass = BlackLargeCoffeeGlassDirector.construct()
const yellowMediumWater = YellowMediumWaterGlassDirector.construct()
const smallWaterMeta = SmallWaterMetalDirector.construct()
const SubmitButton = defineAsyncComponent(() => import('./button.vue'))
const FormInput = defineAsyncComponent(() => import('./input.vue'))
</script>
