<template>
  <div class="wishpage">
    <div class="container_title">
      <h2>Seznam mých přání</h2>
    </div>

    <div v-if="isModalOpen" class="modal">
      <wishForm v-on:push="addWish($event)" @hide="hide" />
      <button @click="hide" class="main__button hide__btn">X</button>
    </div>

    <wishList v-bind:wishes="wishes" />

    <div class="container_button">
      <button @click="show" class="main__button">Vložit přání</button>
    </div>

    <div class="container_button">
      <button class="main__button" @click="getURL">
        Tady je odkaz pro sdílení
      </button>
    </div>
    <div class="url"></div>
    {{ userID }}
  </div>
</template>
<script>
import WishList from "./WishList.vue";
import WishForm from "./WishForm.vue";
import db from "../db";

export default {
  name: "WishPage",

  data() {
    return {
      wishes: [],
      isModalOpen: false,
      userID: this.$route.params.id,
    };
  },

  firestore: {
    wishes: db.collection("wishes"),
  },

  //   coumpouted:{
  // list() {
  //   return neco.neco.find (
  //   list => list.id === this.userID) cesta ke správnému seznamu podle id?
  // }
  //   }

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

    addWish(value) {
      this.wishes.push(value);
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
  background-color: #2c7873;
  width: 50%;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}
</style>
