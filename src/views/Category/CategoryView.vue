<template>
  <div class="container">
    <h1 class="margin-bottom-50">All Categories</h1>
    <div class="row margin-bottom-50">
        <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 pb-3 pt-3 col-sm-12">
            <CategoryBox :category="category" />
        </div>
    </div>
  </div>
</template>

<script>
// const axios = require("axios").default
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
    name: "allCategories",
    props: ["baseURL", "categories"],
    components: {CategoryBox},
    mounted() {
        // this.getCategories() // Not needed since passing categories in as a prop through App.vue
    }
}
</script>

<style lang="css">
</style>