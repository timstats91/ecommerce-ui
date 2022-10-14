<template>
  <div class="card w-100 h-100">
    <div>
        <img class="card-img-top" :src="category.imageUrl" alt="">
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ category.categoryName }}</h5>
        <p class="card-text">{{ category.description }}</p>
        <a href="" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
    name: CategoryBox,
    props: ["category"],
    methods: {
        async getCategories() {
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