<template>
  <aside class="menu">
    <div class="menu__item">Můje přání</div>
    <div class="menu__item">Přání ostatních</div>
    <div class="menu__item">Zamluveno</div>
    <div class="menu__item">Kalendář</div>
  </aside>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  flex: 0 1 85vw;
  width: 85vw;
  height: 100%;
  background-color: #004445;
  color: #e7dfd5;
}

.menu__item {
  line-height: 2rem;
  padding: 0 2rem;
}
</style>
