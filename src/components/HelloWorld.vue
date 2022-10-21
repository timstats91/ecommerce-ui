<template>
  <div class="hello">
    <h1 class="margin-bottom-50">{{ msg }}</h1>
    <p>Please sign in to get started.</p>
    <router-link :to="{name: 'admin'}" class="btn btn-green margin-bottom-50">
      Sign In
    </router-link>
    <br />
    <img alt="Vue logo" src="../assets/logo.png" class="margin-bottom-50">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
