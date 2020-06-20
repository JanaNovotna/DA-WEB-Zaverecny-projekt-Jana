<template>
  <div class="container">
    <ourLogo />

    <div class="hlavni__obsah">
      <h1 class="hidden">Dárky bez starostí</h1>
      <p>Vítejte na stránkách, které vám pomohou se starostmi s dárky.</p>
      <h2>Jak to funguje?</h2>
      <div class="how_it_works">
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" class="icon" />
          <p>Vytvořte si seznam dárků.</p>
          <img src="assets/img/list.png" alt="Seznam" class="des_icon" />
        </div>
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" class="icon" />
          <p>Pošlete seznam svým přátelům.</p>
          <img src="assets/img/mail.png" alt="Obálka" class="des_icon" />
          <p>Přátele si zamluví dárek, který vám chtějí pořídit.</p>
        </div>
        <div class="description">
          <img src="assets/img/present.png" alt="Dárek" class="icon" />
          <p>Těšte se na to, co dostane za dárky!</p>
          <img
            src="assets/img/openedGift.png"
            alt="Otevřený dárek"
            class="des_icon"
          />
        </div>
      </div>
      <router-link class="main__button" to="/muj_seznam/cwYzBFH0XQ6PQ2fym8pk"
        >Zadat nové přání</router-link
      >
    </div>

    <wishPage />
  </div>
</template>

<script>
import Logo from "./Logo1.vue";
import WishPage from "./WishPage.vue";

export default {
  name: "LandingPage",
  components: {
    ourLogo: Logo,
    wishPage: WishPage,
  },
};
</script>
<style scoped>
p {
  text-align: center;
}
</style>
