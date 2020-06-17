<template>
  <router-view />
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
export default {
  name: "App",
  components: {
    landingPage: LandingPage
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

h3 {
  color: #004445;
  font-size: 1.5rem;
  margin: 0;
}

.hidden {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hlavni__obsah {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.how_it_works {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.icon {
  width: 2rem;
  margin: 0 auto;
}
.des_icon {
  width: 4rem;
  margin: 0 auto;
}

.description {
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-bottom: 1px solid #e7dfd5;
  margin-bottom: 1rem;
}

.main__button {
  font-family: "Roboto Slab", serif;
  text-decoration: none;
  text-align: center;
  background-color: rgba(255, 217, 0, 0.884);
  color: #2c7873;
  max-width: 50vw;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.main__button:hover {
  background-color: #2c7873;
  color: rgba(255, 217, 0, 0.884);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

@media (min-width: 768px) {
  .how_it_works {
    flex-direction: row;
  }
  .description {
    width: 33.33%;
    border-bottom: none;
  }
  .add__present {
    max-width: 25vw;
  }
}

@media (min-width: 1024px) {
}

@media (min-width: 1280px) {
}
</style>
