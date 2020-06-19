<template>
  <div class="wishpage">
    <div class="container_title">
      <h2>Seznam mých přání</h2>
    </div>

    <div v-if="isModalOpen" class="modal">
      <wishForm v-on:push="addWish($event)" />
      <button @click="hide" class="main__button hide__btn">X</button>
    </div>

    <wishList v-bind:wishes="wishes" />

    <div class="container_button">
      <button @click="show" class="main__button">Vložit přání</button>
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

  data() {
    return {
      wishes: [
        {
          title: "Lízátko",
          description: "Velké, červeno-bílé, sladké.",
          link: "https://static.glami.cz/img/520x520bt/212315474.jpg"
        },
        {
          title: "Omalovánky",
          description: "Včetně pastelek.",
          link:
            "https://www.detskyusmev.eu/fotky79138/fotos/_vyrn_3864b96536124.jpg"
        },
        {
          title: "Autíčko na dálkové ovládání",
          description: "Hasiči nebo policajti.",
          link: "https://cdn.alza.cz/ImgW.ashx?fd=f3&cd=HRAif10801"
        }
      ],
      isModalOpen: false
    };
  },

  components: {
    wishList: WishList,
    wishForm: WishForm
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
}
</style>
