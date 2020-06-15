<template>
  <div class="container">
    <ourLogo />
    <existinList />
    <div class="hlavni__obsah">
      <h1>Dárky bez starostí</h1>
      <router-link class="add__present" to="/nove_prani"
        >Zadat nové přání</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo1.vue";
import List from "./components/ExistingList.vue";
import ListPage from "./ListPage.vue";

export default {
  name: "App",
  components: {
    ourLogo: Logo,
    existinList: List,
  },
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
  justify-content: center;
}

h1 {
  text-align: center;
  color: #6fb98f;
}

h2 {
  color: #e7dfd5;
}

.add__present {
  font-family: "Roboto Slab", serif;
  text-decoration: none;
  text-align: center;
  background-color: rgba(255, 217, 0, 0.884);
  color: #2c7873;
  max-width: 20vw;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.add__present:hover {
  background-color: #2c7873;
  color: rgba(255, 217, 0, 0.884);
  border: 1px solid rgb(255, 217, 0, 0.884);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

@media (min-width: 640px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1280px) {
}
</style>
