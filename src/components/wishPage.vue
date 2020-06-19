<template>
  <div class="wishpage">
    <div class="container_title">
      <h2>Seznam mých přání</h2>
    </div>
    <wishList />
    <div class="container_button">
      <button @click="show">Vložit přání</button>
    </div>
    <div v-if="isModalOpen" class="modal">
      <wishForm />
      <button @click="hide" class="hide__btn">X</button>
    </div>
    <div class="container_button">
      <button class="main__button" @click="getURL">Tady je odkaz pro sdílení</button>
      <div class="url"></div>
    </div>
  </div>
</template>
<script>
import WishList from "./WishList.vue";
import WishForm from "./WishForm.vue";

export default {
  name: "WishPage",

  components: {
    wishList: WishList,
    wishForm: WishForm
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    getURL() {
      let URL = window.location.href;
      document.querySelector(".url").textContent = `${URL}`;
      console.log(URL);
    },
    show() {
      this.isModalOpen = true;
    },
    hide() {
      this.isModalOpen = false;
    }
  }
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
  background-color: rgba(255, 216, 0, 0.8);
  color: #2c7873;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: "Roboto Slab", serif;
  font-size: 1.3rem;
  font-weight: bold;
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
}
</style>
