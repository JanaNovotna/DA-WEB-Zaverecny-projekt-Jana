<template>
  <aside class="menu">
    <img src="/assets/img/Logo2-rozprac.jpg" alt="Logo" class="logo" />
    <div class="menu__item">Moje přání</div>
    <div class="menu__item">Přání ostatních</div>
    <div class="menu__item">Zamluveno</div>
    <div class="menu__item">Kalendář</div>
  </aside>
</template>

<script>
export default {
  name: "SideMenu"
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  flex: 0 0 20vw;
  width: 20vw;
  height: 100vh;
  background-color: #004445;
  color: #e7dfd5;
}

.menu__item {
  line-height: 2rem;
  padding: 0 2rem;
}

.logo {
  max-width: 10rem;
  max-height: auto;
}
</style>
