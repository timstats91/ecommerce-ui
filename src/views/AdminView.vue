<template>
    <div class="container">
        <h1 class="margin-bottom-50">Admin Options</h1>
        <div class="row">
            <div class="col-md-3 col-0"></div>
            <div class="col-md-6 col-12">
                <div class="admin-options margin-bottom-50 box-shadow">
                    <h2 class="med-text-size margin-bottom-20">Category Options</h2>
                    <router-link :to="{name: 'allCategories'}" class="btn btn-green btn-large margin-right-20">
                        View All Categories
                    </router-link>
                    <router-link :to="{name: 'addCategory'}" class="btn btn-green btn-large">
                        Add New Category
                    </router-link>
                </div>
                <br />
                <div class="admin-options margin-bottom-50 box-shadow">
                    <h2 class="med-text-size margin-bottom-20">Product Options</h2>
                    <router-link :to="{name: 'allProducts'}" class="btn btn-green btn-large margin-right-20">
                        View All Products
                    </router-link>
                    <router-link :to="{name: 'addProduct'}" class="btn btn-green btn-large">
                        Add New Product
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 col-0"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.admin-options {
    border: 1px solid rgb(239, 239, 239);
    padding: 1em;
    border-radius: .5em;
}
</style>