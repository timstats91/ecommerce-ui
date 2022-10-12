<template>
  <div class="add-category margin-bottom-50">
    <h1>Add a Category</h1>
  </div>
  <div class="container">
    <div class="row">
        <div class="col-3"></div>
        <form action="" class="form-group col-6">
            <div class="margin-bottom-20">
                <label for="">Category Name</label>
                <input type="text" class="form-control" v-model="categoryName" />
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Description</label>
                <textarea type="text" class="form-control" v-model="description" />
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Image URL</label>
                <input type="text" class="form-control" v-model="imageUrl" />
            </div>
            <button type="submit" class="btn btn-primary" @click="addCategory">Sumbit</button>
        </form>
        <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios")
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