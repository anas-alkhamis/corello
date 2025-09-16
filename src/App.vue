<template>
  <form-controller v-model="form" />
  <form-controller v-model="form2" />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { schema as productSchema } from './forms/product-form'
import { schema as userSchema } from './forms/user-form'
import { useForm } from './utilities/use-form'
import type { IProduct, IUser } from './domain/meta'
import { Product, User } from './domain/def'

const submit = (data: any) => {
  console.log(data)
}
const form2 = useForm<IProduct>(Product, productSchema, { submit, validationItems: ['supplier.companyName', 'name', 'owner.groups.copyWithin'], defaultValues: { supplier: { companyName: '' } } })
const form = useForm<IUser>(User, userSchema, { submit, validationItems: ['name', 'password'], defaultValues: { name: 'Anas' } })

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
