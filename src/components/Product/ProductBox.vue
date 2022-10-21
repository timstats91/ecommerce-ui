<template>
  <div class="card w-100 h-100">
    <div>
        <img class="card-img-top" :src="product.imageUrl" alt="">
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">${{ product.price }}</p>
        <a href="" class="btn btn-green">Go somewhere</a>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default
import ProductBox from '../../components/Product/ProductBox.vue'
export default {
    name: ProductBox,
    props: ["product"],
    methods: {
        async getProducts() {
            await axios.get()
        }
    },
}
</script>

<style>
.card-img-top {
    max-height: 220px;
    object-fit: cover;
}
</style>