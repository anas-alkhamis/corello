<template>
  <pre
    style="
      background-color: #0f0f0f;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: monospace;
      font-size: 18px;
      color: lightgray;
      width: 70vw;
      max-height: 90vh;
      overflow: auto;
    "
  ><code>
{{ schema.getResult() }}

</code></pre>
</template>

<script setup lang="ts">
import { FieldsSchema } from '../domain/def/field-schema'
import { FieldTypeEnum } from '../domain/meta/enums/field-type'

//-------------------------------------------------------------------------------
const schema = new FieldsSchema()
schema.addField('password', {
  type: FieldTypeEnum.Password,
  path: 'password',
  placeholder: { en: 'Enter password', ar: 'ادخل وحدة' },
  label: { en: 'Password', ar: 'كلمة السر' },
  description: { en: 'user password', ar: 'كلمة سر المسنخدم المستخدم' },
  required: true
})
schema.addField('groups', {
  type: FieldTypeEnum.DropDownAsync,
  path: 'groups',
  placeholder: {
    en: 'Select groups',
    ar: 'حدد المجموعات'
  },
  label: {
    en: 'Groups',
    ar: 'المجموعات'
  },
  description: {
    en: 'user groups',
    ar: 'مجموعات المستخدم'
  },
  required: true,
  dataService: {
    uniquePath: 'groups[i].id',
    limitPerRequest: 5,
    defaultOffset: 0
  }
})
schema.addField('unit', {
  type: FieldTypeEnum.DropDownAsync,
  path: 'unit',
  placeholder: { en: 'Select Unit', ar: 'حدد وحدة' },
  label: { en: 'Unit', ar: 'وحدة' },
  description: { en: 'user unit', ar: 'وحدة المستخدم' },
  required: true,
  dataService: {
    uniquePath: 'unit.id',
    limitPerRequest: 10,
    defaultOffset: 0
  }
})
console.log(schema.getResult())
</script>
