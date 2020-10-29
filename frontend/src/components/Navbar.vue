<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Orgo App</a>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Home
        <span class="sr-only">(current)</span></router-link>
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
        <router-link to="/ingredients"><a class="nav-link" href="#">Add Recipes</a></router-link>
      </li>
    </ul>
    <!-- <span class="navbar-text">
      <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </span> -->
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
}
</style>
