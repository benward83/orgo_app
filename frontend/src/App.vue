<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>

.body {
/* background:#114357;
background: -webkit-linear-gradient(to right, #F29492, #114357);
background: linear-gradient(to right, #F29492, #114357); */

background: rgb(240,235,223);
background: linear-gradient(90deg, rgba(240,235,223,1) 0%,
 rgba(78,78,78,0.7105217086834734) 100%);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
