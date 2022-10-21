<template>
  <div class="add-category margin-bottom-50">
    <h1>Add a Product</h1>
  </div>
  <div class="container margin-bottom-50">
    <div class="row">
        <div class="col-md-3 col-0"></div>
        <form action="" class="form-group col-md-6 col-12">
            <div class="margin-bottom-20">
                <label for="cat-name">Product Category</label>
                <select name="" id="cat-name" class="form-control" v-model="categoryId" required>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                </select>
            </div>
            <div class="margin-bottom-20">
                <label for="prod-name">Product Name</label>
                <input type="text" class="form-control" id="prod-name" v-model="name" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-des">Product Description</label>
                <textarea type="text" class="form-control" id="prod-des" v-model="description" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-price">Product Price</label>
                <input type="text" class="form-control" id="prod-price" v-model="price" />
            </div>
            <div class="margin-bottom-20">
                <label for="prod-image">Product Image URL</label>
                <input type="text" class="form-control" id="prod-image" v-model="imageUrl" />
            </div>
            <button type="submit" class="btn btn-primary" v-on:click="addProduct">Sumbit</button>
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
            categoryId: null,
            name: null,
            description: null,
            price: null,
            imageUrl: null
        }
    },
    methods: {
        async addProduct() {
            const newProduct = {
                categoryId: this.categoryId,
                name: this.name,
                description: this.description,
                imageUrl: this.imageUrl,
                price: this.price,
            }
            const baseUrl = "http://ecommerceapi-env.eba-xcpssugi.us-east-1.elasticbeanstalk.com"
            await axios({
                method: 'post',
                url: `${baseUrl}/product/add/`,
                data: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(()=> {
                this.$emit("fetchData")
                this.$router.push({name: "addProduct"})
                sweetalert({
                    text: "Product added successfully",
                    icon: "success",
                })
            }).catch(err => {
                console.log(err);
            })
        }
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