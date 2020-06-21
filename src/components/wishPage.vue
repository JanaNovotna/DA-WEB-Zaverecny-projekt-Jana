<template>
  <div class="wishpage">
    <div class="container_title">
      <h1>Seznam mých přání</h1>
    </div>

    <div v-if="isModalOpen" class="modal">
      <wishForm v-on:push="addWish($event)" @hide="hide" />
      <button @click="hide" class="main__button hide__btn">X</button>
    </div>

    <div v-if="wishlist.wishes.length === 0" class="empty__list">
      Váš seznam je zatím prázdný
    </div>

    <wishList
      v-if="wishlist.wishes.length > 0"
      v-bind:wishes="wishlist.wishes"
      v-bind:wishlistID="wishlistID"
      v-bind:userType="'owner'"
    />

    <div class="container_button">
      <button @click="show" class="main__button">Vložit přání</button>
    </div>

    <div class="container_button">
      <button class="main__button" @click="getURL">
        Tady je odkaz pro sdílení
      </button>
    </div>
    <div class="url"></div>
  </div>
</template>
<script>
import WishList from "./WishList.vue";
import WishForm from "./WishForm.vue";
import db from "../db";
import firebase from "firebase/app";

export default {
  name: "WishPage",

  data() {
    return {
      wishlist: { wishes: [] },
      isModalOpen: false,
      wishlistID: this.$route.params.id,
    };
  },

  firestore() {
    return {
      wishlist: db.collection("wishlists").doc(this.wishlistID),
    };
  },

  components: {
    wishList: WishList,
    wishForm: WishForm,
  },

  methods: {
    getURL() {
      let URL = window.location.href;
      document.querySelector(".url").textContent = URL;
      this.$clipboard(URL);
      window.confirm("Zkopírováno: " + URL);
    },
    show() {
      this.isModalOpen = true;
    },
    hide() {
      this.isModalOpen = false;
    },

    async addWish(value) {
      const newId = await db
        .collection("wishes")
        .add({ ...value, taken: false });
      const wishlist = db.collection("wishlists").doc(this.wishlistID);
      await wishlist.update({
        wishes: firebase.firestore.FieldValue.arrayUnion(newId),
      });
    },
  },
};
</script>

<style scoped>
.modal {
  width: 100vw;
  height: 100wh;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  left: 0;
  top: 0;
}

.wishpage {
  margin: 10vh 0;
  padding: 0 5vw;
}

.container_title,
.container_button {
  text-align: center;
}

h2 {
  font-size: 1.8rem;
}

.empty__list {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
}

button {
  padding: 10px 20px;
  font-size: 1.3rem;
  margin: 5vh 0;
}

.hide__btn {
  position: absolute;
  right: 2vw;
  top: -2vh;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
}

.url {
  background-color: #59cbbc;
  width: 50%;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}
</style>
