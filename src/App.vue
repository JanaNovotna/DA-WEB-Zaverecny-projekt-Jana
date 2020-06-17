<template>
  <div class="container">
    <ourMenu />
    <div class="hlavni__obsah">
      <newWish />
      <wishPage />
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import NewWish from "./components/WishForm.vue";
import WishPage from "./components/WishPage.vue";

export default {
  name: "App",
  components: {
    ourMenu: Menu,
    newWish: NewWish,
    wishPage: WishPage
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
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  color: rgba(255, 216, 0, 0.8);
}

h2 {
  color: #e7dfd5;
}
</style>
