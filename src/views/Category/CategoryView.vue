<template>
  <div class="container">
    <h1 class="margin-bottom-50">All Categories</h1>
    <div class="row">
        <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 pb-3 pt-3 col-sm-12">
            <CategoryBox :category="category" />
        </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
    name: "allCategories",
    components: {CategoryBox},
    data() {
        return {
            baseUrl: "http://localhost:8080",
            categories: []
        }
    },
    methods: {
        async getCategories() {
            await axios.get(`${this.baseUrl}/category/list`)
            .then(res => this.categories = res.data)
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>

<style lang="css">
.margin-bottom-20 {
    margin-bottom: 20px;
}
.margin-bottom-50 {
    margin-bottom: 50px;
}
</style>