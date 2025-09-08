<template>
  <Form />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Form = defineAsyncComponent(() => import('./components/form.vue'))
</script>
<!-- cant pass user object as instance of user to the product.owner -->
<!-- on the first render return it runs validation before any changes -->
<!-- if the auto  is false the change on property value will not reset the validation-->
<!-- instantiate new DTO class without default value, will only get the first level of the default values -->
<!-- undefined value passed to class will return undefined rather then taking instance with default values -->
