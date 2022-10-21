<template>
  <div class="add-category margin-bottom-50">
    <h1>Add a Category</h1>
  </div>
  <div class="container margin-bottom-50">
    <div class="row">
        <div class="col-md-3 col-0"></div>
        <form action="" class="form-group col-md-6 col-12">
            <div class="margin-bottom-20">
                <label for="cat-name">Category Name</label>
                <input type="text" class="form-control" id="cat-name" v-model="categoryName" />
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Description</label>
                <textarea type="text" class="form-control" id="cat-des" v-model="description" />
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Image URL</label>
                <input type="text" class="form-control" id="cat-image" v-model="imageUrl" />
            </div>
            <button type="button" class="btn btn-primary" v-on:click="addCategory">Sumbit</button>
        </form>
        <div class="col-md-3 col-0"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default
const sweetalert = require("sweetalert")
export default {
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: ""
        }
    },
    methods: {
        addCategory() {
            console.log(this.categoryName, this.description, this.imageUrl)
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            }
            const baseUrl = "http://localhost:8080"
            axios({
                method: 'post',
                url: `${baseUrl}/category/create`,
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(()=> {
                sweetalert({
                    text: "Category added successfully",
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