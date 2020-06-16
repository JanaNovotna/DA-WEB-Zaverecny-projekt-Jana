<template>
  <aside class="menu">
    <logo />
    <button class="menu__item">Zadat nové přání</button>
    <button class="menu__item">Seznam přání</button>
  </aside>
</template>

<script>
import Logo from "./Logo1.vue";
export default {
  name: "Menu",
  components: {
    logo: Logo
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2rem;
  background-color: #004445;
  color: #e7dfd5;
}

.menu__item {
  background-color: rgba(255, 216, 0, 0.8);
  color: #2c7873;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-family: "Roboto Slab", serif;
  font-size: 1.2rem;
}
</style>
