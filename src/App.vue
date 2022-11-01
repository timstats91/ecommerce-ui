<template>
  <NavBar class="navbar"/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/categories">View All Categories</router-link> |
    <router-link to="/admin/category/add">Add Category</router-link>
  </nav> -->
  <router-view
      :key="$route.fullPath"
      v-if="products && categories"
      :baseURL="baseURL"
      :products="products"
      :categories="categories"
      @fetchData="fetchData"
    >
    </router-view>
  <footer style="margin-top: auto;">
    <div>
      <p>&copy; 2022 CompSciGear.com</p>
    </div>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      //baseURL: "http://ecommerceapi-env.eba-xcpssugi.us-east-1.elasticbeanstalk.com/",
      baseURL: "http://localhost:8080/",
      products: [],
      categories: [],
    }
  },
  methods: {
    async fetchData() {
      //fetch products
      await axios
        .get(this.baseURL + 'product/')
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err))

      //fetch categories
      await axios
        .get(this.baseURL + 'category/')
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  margin-bottom: 50px;
}

.margin-bottom-20 {
    margin-bottom: 20px;
}
.margin-bottom-50 {
    margin-bottom: 50px;
}

.margin-right-20 {
    margin-right: 20px;
}
.btn {
    background-color: white;
}
.btn:focus {
    border: none;
}
.btn-green {
  border: 1px solid #42b983;
  color: #42b983;
}
.btn-green:hover {
  border: 1px solid #42b983;
  background-color: #42b983;
  color: white;
}
.btn-green-solid {
  border: 1px solid #42b983;
  background-color: #42b983;
  color: white;
  margin-left: 1em;
}
.btn-green-solid:hover {
  background-color: #2e815b;
}
.med-text-size {
  font-size: 1.5em;
}
.box-shadow {
  box-shadow: 0 0 20px #42b9837e;
}
</style>
