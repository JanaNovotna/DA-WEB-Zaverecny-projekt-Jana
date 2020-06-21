<template>
  <div class="hlavni__obsah">
    <div class="header">
      <h1 class="hidden">Dárky bez starostí</h1>
      <p class="claim">Sdílejte svá přání s rodinou a přáteli.</p>
    </div>
    <h2>Jak to funguje?</h2>
    <div class="how_it_works">
      <div class="description">
        <img src="../assets/img/list.png" alt="Seznam" class="des_icon" />
        <p>Vytvořte si seznam dárků.</p>
      </div>
      <div class="description">
        <img src="../assets/img/letter.png" alt="Obálka" class="des_icon" />
        <p>
          Pošlete seznam svým přátelům.<br />
          Přátele si na seznamu zamluví dárek, který vám chtějí pořídit.
        </p>
      </div>
      <div class="description">
        <img
          src="../assets/img/gift.png"
          alt="Otevřený dárek"
          class="des_icon"
        />
        <p>Těšte se na to, co dostane za dárky!</p>
      </div>
    </div>
    <button @click="addList" class="main__button add__button">
      Vytvořit nový seznam přání
    </button>
  </div>
</template>

<script>
import db from "../db";
import firebase from "firebase/app";

export default {
  name: "LandingPage",

  methods: {
    async addList() {
      const newList = await db
        .collection("wishlists")
        .add({ wishes: [], userID: localStorage.userID });
      const newListId = (await newList.get()).id;
      console.log(newListId);
      this.$router.push({ name: "mujSeznam", params: { id: newListId } });
    },
  },
};
</script>
<style scoped>
p {
  text-align: center;
  line-height: 1.3rem;
}

.header {
  background: url("../assets/img/newDesign.jpg");
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.claim {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
  color: #fff;
  margin: 1rem;
}

h2 {
  margin: 5vh 0;
}

.add__button {
  margin: 5vh 0;
  width: 20rem;
  font-size: 1.2rem;
}
</style>
