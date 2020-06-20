<template>
  <div class="container">
    <div class="hlavni__obsah">
      <div class="header">
        <ourLogo />
        <h1 class="hidden">Dárky bez starostí</h1>
        <p class="claim">Stránky, které vám pomohou se starostmi s dárky.</p>
      </div>
      <h2>Jak to funguje?</h2>
      <div class="how_it_works">
        <div class="description">
          <img src="assets/img/list.png" alt="Seznam" class="des_icon" />
          <p>Vytvořte si seznam dárků.</p>
        </div>
        <div class="description">
          <img src="assets/img/mail.png" alt="Obálka" class="des_icon" />
          <p>
            Pošlete seznam svým přátelům.<br />
            Přátele si na seznamu zamluví dárek, který vám chtějí pořídit.
          </p>
        </div>
        <div class="description">
          <img
            src="assets/img/openedGift.png"
            alt="Otevřený dárek"
            class="des_icon"
          />
          <p>Těšte se na to, co dostane za dárky!</p>
        </div>
      </div>
      <router-link
        class="main__button add__button"
        to="/muj_seznam/cwYzBFH0XQ6PQ2fym8pk"
        >Zadat nové přání</router-link
      >
    </div>
  </div>
</template>

<script>
import Logo from "./Logo1.vue";

export default {
  name: "LandingPage",
  components: {
    ourLogo: Logo,
  },
};
</script>
<style scoped>
.header {
  background-color: #042f30;
}
.hlavni__obsah {
  margin-top: 5vh;
}

h2 {
  margin: 5vh 0;
}

p {
  text-align: center;
  line-height: 1.3rem;
}

.claim {
  font-size: 1.5rem;
}

.add__button {
  margin-top: 5vh;
  width: 20rem;
  font-size: 1.2rem;
}
</style>
