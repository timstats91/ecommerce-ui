<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img class="card-img-top" src="https://www.pexels.com/photo/photo-of-a-macbook-air-812264/" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
