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
  font-family: "Raleway", sans-serif;
  background-color: #f2f8f8;
  color: #000;
}
body {
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: #fff;
}

h2 {
  color: #59cbbc;
}

h3 {
  color: #59cbbc;
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
  justify-content: center;
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
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}

.main__button {
  font-family: "Roboto Slab", serif;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  background-color: #59cbbc;
  max-width: 60vw;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.main__button:hover {
  color: #fff;
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
