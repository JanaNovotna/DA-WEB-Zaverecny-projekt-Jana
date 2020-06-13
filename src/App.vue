<template>
  <div class="container">
    <ourMenu />
    <div class="hlavni__obsah">
      <div>
        <h1>Dárky bez starostí</h1>
        <newWish />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import NewWish from "./components/wishForm.vue";

export default {
  name: "App",
  components: {
    ourMenu: Menu,
    newWish: NewWish
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Slab", serif;
  background-color: #004445;
  color: #e7dfd5;
}
body {
  margin: 1rem;
}

.hlavni__obsah {
  display: flex;
}

h1 {
  text-align: center;
  color: #6fb98f;
}

h2 {
  color: #e7dfd5;
}
</style>
