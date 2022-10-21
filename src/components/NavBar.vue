<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Navbar content -->
    <!--    Logo-->
    <router-link class="navbar-flexbox navbar-brand" :to="{ name: 'home' }">
      <img id="logoone" src="../assets/logo.png" />
      <p id="logo">Comp Sci <span class="navbold">Gear</span></p>
    </router-link>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      <router-link class="navbarlink" to="/admin">Sign In</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
#logo {
  font-size: 1.25em;
  font-weight: 400;
  color: #42b883;
  margin-bottom: 0;
}
#logoone {
  margin-left: 20px;
  margin-right: 5px;
  height: 30px;
}
#logo:hover {
    color: #f8f9fa;
}
.navbar-flexbox {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.navbold {
  font-weight: 700;
}
.navbarlink {
  margin-left: 20px;
  margin-right: 20px;
}
a {
  color: white;
}
</style>