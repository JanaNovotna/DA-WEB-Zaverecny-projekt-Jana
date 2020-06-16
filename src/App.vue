<template>
  <div class="container">
    <ourMenu />
    <div class="hlavni__obsah"></div>
    <newWish />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import NewWish from "./components/WishForm.vue";

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
  justify-content: center;
}

h1 {
  text-align: center;
  color: rgba(255, 216, 0, 0.8);
}

h2 {
  color: #e7dfd5;
}
</style>
