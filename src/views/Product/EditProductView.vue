<template>
  <div class="add-category margin-bottom-50">
    <h1>Edit Product</h1>
  </div>
  <div class="container margin-bottom-50">
    <div class="row">
        <div class="col-md-3 col-0"></div>
        <form @submit.prevent v-if="product" action="" class="form-group col-md-6 col-12">
            <div class="margin-bottom-20">
                <label for="cat-name">Product Category</label>
                <select name="" id="cat-name" class="form-control" v-model="product.categoryId" required>
                    <option v-for="category of categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                </select>
            </div>
            <div class="margin-bottom-20">
                <label for="prod-name">Product Name</label>
                <input type="text" class="form-control" id="prod-name" v-model="product.name" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-des">Product Description</label>
                <textarea type="text" class="form-control" id="prod-des" v-model="product.description" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-price">Product Price</label>
                <input type="number" step="0.01" class="form-control" id="prod-price" v-model="product.price" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-image">Product Image URL</label>
                <input type="text" class="form-control" id="prod-image" v-model="product.imageUrl" />
            </div>
            <button type="submit" class="btn btn-green" v-on:click="editProduct">Sumbit</button>
        </form>
        <div class="col-md-3 col-0"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default
const sweetalert = require("sweetalert")
export default {
    emits: ["fetchData"],
    props: [
        "categories",
        "products",
        "baseURL",
    ],
    data() {
        return {
            product: null,
            id: null
        }
    },
    methods: {
        async editProduct() {
            //delete this.product["products"]
            await axios.post( `${this.baseURL}product/update/${this.id}`, this.product )
            .then(() => {
                this.$emit("fetchData")
                this.$router.push({name: 'allProducts'})
                sweetalert({
                    text: "The product has be updated!",
                    icon: "success"
                })
            })
            .catch(err => console.log('err', err))
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.product = this.products.find(product => product.id == this.id)
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