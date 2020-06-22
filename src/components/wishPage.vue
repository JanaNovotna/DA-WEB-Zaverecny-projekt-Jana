<template>
  <div class="my_wish_list">
    <div class="header_container">
      <h1>Seznam mých přání</h1>
    </div>
    <div class="wish_list_name">
      <img src="/assets/img/list.png" alt="Seznam" class="des_icon" />
      <h2>{{ wishlist.list_name }}</h2>
    </div>
    <div v-if="isModalOpen" class="modal">
      <wishForm v-on:push="addWish($event)" @hide="hide" />
      <button @click="hide" class="main__button hide__btn">X</button>
    </div>

    <div v-if="wishlist.wishes.length === 0" class="empty__list">
      Váš seznam je zatím prázdný
    </div>
    <div class="wish_list">
      <wishList
        v-if="wishlist.wishes.length > 0"
        v-bind:wishes="wishlist.wishes"
        v-bind:wishlistID="wishlistID"
        v-bind:userType="'owner'"
      />
    </div>

    <div class="add_new_wish_btn">
      <button @click="show" class="main__button">Vložit přání</button>
    </div>

    <div class="share_link">
      <div class="url">{{ newURL }}</div>
      <button class="main__button small__button" @click="getURL">Sdílet</button>
    </div>
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
      wishlist: { wishes: [], userID: "" },
      isModalOpen: false,
      wishlistID: this.$route.params.id,
    };
  },

  computed: {
    newURL() {
      return window.location.origin + "/seznam_prani/" + this.wishlistID;
    },
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
      // document.querySelector(".url").textContent = URL;
      this.$clipboard(this.newURL);
      alert("Zkopírováno: " + this.newURL);
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
        .add({ ...value, takenBy: null });
      const wishlist = db.collection("wishlists").doc(this.wishlistID);
      await wishlist.update({
        wishes: firebase.firestore.FieldValue.arrayUnion(newId),
      });
    },
  },
};
</script>

<style scoped>
.my_wish_list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/assets/img/banner.jpg") #59cbbc;
  background-position: center center;
  background-size: cover;
  height: 15vh;
  width: 100%;
  margin-bottom: 2rem;
}

.wish_list_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.des_icon {
  width: 4rem;
  margin: 1rem auto;
}

.empty__list {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
}

.add_new_wish_btn {
  margin-top: 2rem;
}

.share_link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(112, 111, 111);
  border-radius: 5px;
  margin-top: 2rem;
}
.url {
  flex-basis: 80%;
  margin-left: 0.75rem;
  word-break: break-all;
}

.small__button {
  flex-basis: 19%;
  font-size: 1rem;
  margin: 0;
}

.modal {
  width: 100vw;
  height: 100wh;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  left: 0;
  top: 0;
}

.hide__btn {
  position: absolute;
  right: 2vw;
  top: 2vh;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}

@media (min-width: 640px) {
  .share_link {
    width: 40vw;
  }
}

@media (min-width: 1280px) {
  .share_link {
    width: 30vw;
  }
}
</style>
