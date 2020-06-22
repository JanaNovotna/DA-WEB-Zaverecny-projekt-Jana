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

    <div v-if="wishlists.length > 0" class="existing_list">
      <img src="../assets/img/list.png" alt="Seznam" class="des_icon" />
      <p>Tady jsou vaše seznamy, můžete je upravit a znovu odeslat:</p>

      <div v-for="(wishlist, index) in wishlists" v-bind:key="index" class="list_link">
        Seznam
        <router-link :to="{ path: `/muj_seznam/${wishlist.id}` }" class="link">
          <span class="list_name">{{ wishlist.list_name }}</span>
        </router-link>
      </div>
      <p>Nebo můžete:</p>
      <button
        @click="isModalOpen = true"
        class="main__button add__button"
      >Vytvořit nový seznam přání</button>
    </div>

    <div v-else class="welcome">
      <div class="title">
        <h2>Jak to funguje?</h2>
      </div>
      <div class="how_it_works">
        <div class="description">
          <img src="../assets/img/list.png" alt="Seznam" class="des_icon" />
          <p>Vytvořte si seznam dárků.</p>
        </div>
        <div class="description">
          <img src="../assets/img/letter.png" alt="Obálka" class="des_icon" />
          <p>
            Pošlete seznam svým přátelům.
            <br />Přátele si na seznamu mohou zamluvit dárek,
            <br />který vám chtějí pořídit.
          </p>
        </div>
        <div class="description">
          <img src="../assets/img/gift.png" alt="Otevřený dárek" class="des_icon" />
          <p>Těšte se na to, co dostane za dárky!</p>
        </div>
      </div>
      <button
        @click="isModalOpen = true"
        class="main__button add__button"
      >Vytvořit nový seznam přání</button>
    </div>
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

.hidden {
  display: none;
}

.hlavni__obsah {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header {
  background: url("../assets/img/newDesign.jpg") #59cbbc;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.claim {
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 600;
  color: #fff;
  margin: 1rem;
}

.existing_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(240, 235, 235);
  width: 100%;
}

.list_link {
  text-align: center;
  margin: 0.5rem 0;
}

.list_name {
  color: #59cbbc;
  font-weight: 500;
  font-size: 1.6rem;
}

.link {
  text-decoration: none;
  color: #000;
}

.link:hover {
  text-decoration: underline #59cbbc;
}

.link:visited {
  color: #000;
}

.hide__btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  padding: 0;
}

.welcome {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 3rem 0 0 0;
  text-align: center;
}
.how_it_works {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.description {
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}

.des_icon {
  width: 4rem;
  margin: 1rem auto;
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
  margin: 2rem auto;
  width: 20rem;
  font-size: 1.2rem;
}

@media (min-width: 640px) {
  .claim {
    font-size: 3.5rem;
  }

  .how_it_works {
    flex-direction: row;
  }
  .description {
    width: 33.33%;
    border-bottom: none;
    margin: 1rem;
  }
  .add__button {
    max-width: 25vw;
  }
}
</style>
