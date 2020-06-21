<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Raleway", sans-serif;
  background-color: #f2f8f8;
  color: #000;
}
body {
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
}

.main__button {
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
</style>
