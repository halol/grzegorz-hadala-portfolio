<template>
  <div id="app">
    <nav class="flex">
      <div class="fl w-50-l"><h4>Grzegorz Hadala, Product Designer</h4></div>
      <div class="fl w-50-l tr">
        <h4>
          <span class="separator">---</span>
          <button type="button" name="button">Hire me!</button>
        </h4>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  outline: 1px solid red;
}
#app {
  padding: 6em;
}
@media (max-width: 400px) {
  #app {
    padding: 5em 10vw;
  }
}
p {
  font-family: serif;
  font-size: 1.2em;
}
article {
  padding: 3em 0;
  position: relative;
  z-index: 100;
}
h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
}
nav {
  background: #fff;
  position: fixed;
  top: 0;
  left: 6em;
  right: 6em;
}
</style>
