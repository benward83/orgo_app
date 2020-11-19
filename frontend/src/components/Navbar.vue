<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand" href="#">Orgo App
  <span class="sr-only">(current)</span></router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        </li>
        <li class="nav-item">
          <router-link to="/larder"><a class="nav-link" href="#">Larder</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calendar"><a class="nav-link" href="#">Calendar</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shopping"><a class="nav-link" href="#">Shopping List</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/recipes"><a class="nav-link" href="#">Recipes</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addrecipe"><a class="nav-link" href="#">Add Recipe</a></router-link>
        </li>
      </ul>
    </div>
</nav>
</div>
</template>

<style scoped>
.navbar {
  top: 0;
  z-index: 100;
  position: fixed;
  width: 100%;
  color: slategrey;
  border-bottom: 1px solid #2980b9;
}

</style>
