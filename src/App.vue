<template>
  <form-controller :schema="schema" v-model="model" :onSubmit :onReset />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useUserForm } from './forms/user-form'

const submit = (data: any) => {
  console.log(data)
}
const { schema, model, onSubmit, onReset } = useUserForm({ submit, validationItems: ['name', 'password'] })

// const Form = defineAsyncComponent(() => import('./components/form.vue'))
// const LoginForm = defineAsyncComponent(() => import('./components/login-form.vue'))
// const SchemaBuilder = defineAsyncComponent(() => import('./components/schema-builder.vue'))
const FormController = defineAsyncComponent(() => import('./components/form.view.vue'))
</script>
<!-- cant pass user object as instance of user to the product.owner -->
<!-- on the first render return it runs validation before any changes -->
<!-- if the auto  is false the change on property value will not reset the validation-->
<!-- instantiate new DTO class without default value, will only get the first level of the default values -->
<!-- undefined value passed to class will return undefined rather then taking instance with default values -->
