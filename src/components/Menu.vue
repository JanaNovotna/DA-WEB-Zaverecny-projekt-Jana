<template>
  <aside class="menu">
    <logo />
    <div class="menu__item">Zadat nové přání</div>
    <div class="menu__item">Seznam přání</div>
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
  height: 30px;
  padding: 0 2rem;
}
</style>
