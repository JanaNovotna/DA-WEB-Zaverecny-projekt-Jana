<template>
  <div class="container">
    <Menu />
    <div class="hlavni__obsah">
      <sideMenu />
      <div>
        <h1>Dárky bez starostí</h1>
        <newWish />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import sideMenu from "./components/SideMenu.vue";
import newWish from "./components/NewWish.vue";

export default {
  name: "App",
  components: {
    Menu: Menu,
    NewWish: newWish,
    sideMenu: sideMenu,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
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
}
</style>
