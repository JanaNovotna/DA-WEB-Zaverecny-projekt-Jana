<template>
  <div class="hlavni__obsah">
    <div class="header">
      <h1 class="hidden">Dárky bez starostí</h1>
      <p class="claim">Sdílejte svá přání s rodinou a přáteli.</p>
    </div>

    <div v-if="isModalOpen" class="modal">
      <listName v-on:push="addList($event)" @hide="hide" />
      <button @click="hide" class="main__button hide__btn">X</button>
    </div>

    <div v-if="wishlists.length > 0 ">
      <div v-for="(wishlist, index) in wishlists" v-bind:key="index">
        Seznam {{wishlist.list_name}}
        <router-link :to="{ path: `/muj_seznam/${wishlist.id}` }">EDITOVAT</router-link>
      </div>
    </div>

    <div v-else class="how_it_works">
      <h2>Jak to funguje?</h2>
      <div class="description">
        <img src="../assets/img/list.png" alt="Seznam" class="des_icon" />
        <p>Vytvořte si seznam dárků.</p>
      </div>
      <div class="description">
        <img src="../assets/img/letter.png" alt="Obálka" class="des_icon" />
        <p>
          Pošlete seznam svým přátelům.
          <br />Přátele si na seznamu zamluví dárek, který vám chtějí pořídit.
        </p>
      </div>
      <div class="description">
        <img src="../assets/img/gift.png" alt="Otevřený dárek" class="des_icon" />
        <p>Těšte se na to, co dostane za dárky!</p>
      </div>
    </div>

    <button @click="isModalOpen = true" class="main__button add__button">Vytvořit nový seznam přání</button>
  </div>
</template>

<script>
import db from "../db";
import firebase from "firebase/app";
import ListName from "./ListNameForm.vue";

export default {
  name: "LandingPage",

  components: {
    listName: ListName
  },

  data() {
    return {
      currentUserID: localStorage.userID,
      wishlists: [],
      isModalOpen: false,
      newListID: ""
    };
  },

  methods: {
    async addList(value) {
      console.log("here");
      const newList = await db
        .collection("wishlists")
        .add({ ...value, wishes: [], userID: localStorage.userID });
      const newListId = (await newList.get()).id;
      this.newListID = newListId;
      this.$router.push({ name: "mujSeznam", params: { id: this.newListID } });
    },

    hide() {
      this.isModalOpen = false;
    }
  },

  firestore() {
    return {
      wishlists: db
        .collection("wishlists")
        .where("userID", "==", localStorage.userID)
    };
  }
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
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.claim {
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 600;
  color: #fff;
  margin: 1rem;
}

h2 {
  margin: 5vh 0;
}

.modal {
  width: 100vw;
  height: 100wh;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  left: 0;
  top: 0;
}

.add__button {
  margin: 5vh 0;
  width: 20rem;
  font-size: 1.2rem;
}
</style>
