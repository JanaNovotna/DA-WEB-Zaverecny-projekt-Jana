<template>
  <div class="container">
    <ourLogo />

    <div class="hlavni__obsah">
      <h1>Dárky bez starostí</h1>
      <p>Vítejte na stránkách, které vám pomohou se starostmi s dárky.</p>
      <h2>Jak to funguje?</h2>
      <div class="how_it_works">
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" />
          <p>Vytvořte si seznam dárků.</p>
          <img src="assets/img/list.png" alt="Seznam" />
        </div>
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" />
          <p>Pošlete seznam svým přátelům.</p>
          <img src="assets/img/mail.png" alt="Obálka" />
          <p>Přátele si zamluví dárek, který vám chtějí pořídit.</p>
        </div>
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" />
          <p>Těšte se na to, co dostane za dárky!</p>
          <img src="assets/img/openedGift.png" alt="Otevřený dárek" />
        </div>
      </div>
      <router-link class="add__present" to="/nove_prani"
        >Zadat nové přání</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo1.vue";

export default {
  name: "App",
  components: {
    ourLogo: Logo,
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
  justify-content: center;
}

h1 {
  text-align: center;
  color: rgba(255, 216, 0, 0.8);
}

h2 {
  color: #e7dfd5;
}

p {
  text-align: center;
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

.description img {
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

.add__present {
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

.add__present:hover {
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
