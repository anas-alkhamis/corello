<template>
  <div class="container form">
    <button class="form-input" @click="click">Validate</button>

    <div>
      <input type="text" v-model="product.name" class="form-input" placeholder="Product Name" />
      <small v-if="!product.v.name?.result.isOk">{{ product.v?.name?.result?.validators.required.message }}</small>
    </div>

    <div>
      <textarea v-model="product.description" class="form-input" placeholder="Description"></textarea>
    </div>

    <div>
      <input type="number" v-model="product.quantity" class="form-input" placeholder="Quantity" />
      <small v-if="!product.v.quantity?.result.isOk">{{ product.v.quantity?.result?.validators.positive.message }}</small>
    </div>

    <div>
      <input type="number" v-model="product.price" class="form-input" placeholder="Price" />
      <small v-if="!product.v.price?.result.isOk">{{ product.v.price?.result?.validators.max.message }}</small>
    </div>

    <h2>Owner</h2>
    <div>
      <input type="text" v-model="product.owner.name" class="form-input" placeholder="Owner Name" />
      <small v-if="!product.owner?.v.name?.result.validators?.required.isOk">{{ product.owner?.v.name?.result.validators?.required.message }}</small>
    </div>
    <div>
      <input type="text" v-model="product.owner.email" class="form-input" placeholder="Owner Email" />
    </div>
    <div>
      <input type="text" v-model="product.owner.phone" class="form-input" placeholder="Owner Phone" />
    </div>
    <div>
      <input type="text" v-model="product.owner.address" class="form-input" placeholder="Owner Address" />
    </div>

    <h3>Category</h3>
    <div>
      <input type="text" v-model="product.category.title" class="form-input" placeholder="Category Title" />
      <small v-if="!product.category?.v.title?.result.validators?.required.isOk">{{ product.category?.v.title?.result.validators?.required.message }}</small>
    </div>
    <div>
      <input type="text" v-model="product.category.description" class="form-input" placeholder="Category Description" />
    </div>

    <h3>Supplier</h3>
    <div>
      <input type="text" v-model="product.supplier.companyName" class="form-input" placeholder="Company Name" />
      <small v-if="!product.supplier?.v.companyName?.result.validators?.required.isOk">{{ product.supplier?.v.companyName?.result.validators?.required.message }}</small>
    </div>
    <div>
      <input type="text" v-model="product.supplier.contactName" class="form-input" placeholder="Contact Name" />
    </div>
    <div>
      <input type="text" v-model="product.supplier.contactEmail" class="form-input" placeholder="Contact Email" />
    </div>

    <h2>Features</h2>
    <div v-for="feat in featureList" :key="feat.key">
      <label>
        <input type="checkbox" :value="feat" @change="selectFeat(feat)" :checked="product.features.some(a => a.key == feat.key)" />
        {{ feat.label }}
      </label>
    </div>
    <small v-if="!product?.v.features?.result.validators?.moreThanOrEqual.isOk">{{ product?.v.features?.result.validators?.moreThanOrEqual.message }}</small>
  </div>
</template>

<script setup lang="ts">
import { Product } from '../domain/def/product'

const product = new Product({
  description: 'first description',
  owner: { name: 'Anas' },
  category: { title: 'Default Category' },
  supplier: { companyName: 'Supplier Inc.' }
})

const featureList = [
  { key: 'eco', label: 'Eco Friendly' },
  { key: 'fast', label: 'Fast Shipping' },
  { key: 'warranty', label: 'Warranty Included' }
]
const selectFeat = (item: any) => {
  const exist = product.features.findIndex(a => a.key == item.key)
  exist >= 0 ? product.features.splice(exist, 1) : product.features.push(item)
}

window.product = product

const click = async () => {
  console.log(await product.validate())
  console.log(await product.owner.validate())
}
</script>
