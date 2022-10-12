<template>
  <div class="hello">
    <h1 class="margin-bottom-50">{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      You have successfully set up CI/CD with GitHub Actions!
    </p>
    
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
a {
  color: #42b983;
}
</style>
