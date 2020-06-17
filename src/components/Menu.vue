<template>
  <aside class="menu">
    <logo />
    <ul>
      <li>
        <router-link class="main_button link" to="/nove_prani">Zadat nové přání</router-link>
      </li>
      <li>
        <router-link class="main_button link" to="/muj_seznam">Seznam přání</router-link>
      </li>
    </ul>
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
  padding-top: 1rem;
}

.menu ul {
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
  text-align: center;
  min-width: 20vw;
  background-color: rgba(255, 217, 0, 0.884);
  border-radius: 5px;
  transition-duration: 0.4s;
  padding: 0.5rem;
  margin: 0 3rem;
}
.menu .link {
  text-decoration: none;
  color: #2c7873;
  padding: 1rem 2rem;
}

li:hover {
  background-color: #2c7873;
}

.link:hover {
  color: #ffd800;
  padding: 10px 20px;
  border: none;
  font-family: "Roboto Slab", serif;
  font-size: 1.2rem;
}
</style>
