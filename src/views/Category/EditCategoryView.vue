<template>
  <div class="add-category margin-bottom-50">
    <h1>Edit Category</h1>
  </div>
  <div class="container margin-bottom-50">
    <div class="row">
        <div class="col-md-3 col-0"></div>
        <form @submit.prevent v-if="category" action="" class="form-group col-md-6 col-12">
            <div class="margin-bottom-20">
                <label for="cat-name">Category Name</label>
                <input type="text" class="form-control" id="cat-name" v-model="category.categoryName" required/>
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Description</label>
                <textarea type="text" class="form-control" id="cat-des" v-model="category.description" required/>
            </div>
            <div class="margin-bottom-20">
                <label for="">Category Image URL</label>
                <input type="text" class="form-control" id="cat-image" v-model="category.imageUrl" required/>
            </div>
            <button type="button" class="btn btn-green" v-on:click="editCategory">Sumbit</button>
        </form>
        <div class="col-md-3 col-0"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    emits: ["fetchData"],
    data() {
        return {
            category: null,
            id: null,
        }
    },
    props: ["baseURL", "categories"],
    methods: {
        async editCategory() {
            delete this.category["products"]
            //console.log('category', this.category)
            await axios.post( `${this.baseURL}category/update/${this.id}`, this.category )
            .then(() => {
                this.$emit("fetchData")
                this.$router.push({name: 'allCategories'})
                swal({
                    text: "The category has be updated!",
                    icon: "success"
                })
            })
            .catch(err => console.log('err', err))
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.category = this.categories.find(category => category.id == this.id)
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