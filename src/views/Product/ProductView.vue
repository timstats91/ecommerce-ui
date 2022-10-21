<template>
  <div class="container">
    <h1 class="margin-bottom-50">All Products</h1>
    <div class="row margin-bottom-50">
        <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 pb-3 pt-3 col-sm-12">
            <ProductBox :product="product" />
        </div>
    </div>
  </div>
</template>

<script>
// const axios = require("axios").default
import ProductBox from '../../components/Product/ProductBox.vue'
export default {
    name: "allProducts",
    props: ["baseURL", "products"],
    components: {ProductBox},
    mounted() {
        // this.getCategories() // Not needed since passing categories in as a prop through App.vue
    }
}
</script>

<style lang="css">

</style>