<template>
  <div class="friend_wish_list">
    <div class="container_title">
      <h1>Seznam přání</h1>
    </div>

    <div class="how_it_works">
      <div class="description">
        <img src="/assets/img/search.png" alt="Lupa" class="des_icon" />
        <p>Projděte seznam dárků.</p>
      </div>
      <div class="description">
        <img src="/assets/img/cursor.png" alt="Kurzor" class="des_icon" />
        <p>
          Vyberte si ten, který chcete pořidt.
        </p>
      </div>
      <div class="description">
        <img
          src="/assets/img/gift2.png"
          alt="Předávaní dárku"
          class="des_icon"
        />
        <p>Těšte se na to, jakou bude mít obdarovaný radost!</p>
      </div>
    </div>
    <wishList
      v-bind:wishes="wishlist.wishes"
      v-bind:wishlistID="wishlistID"
      v-bind:userType="'donor'"
    />
  </div>
</template>
<script>
import WishList from "./WishList.vue";
import db from "../db";
import firebase from "firebase/app";

export default {
  name: "ListPage",

  components: {
    wishList: WishList,
  },

  data() {
    return {
      wishlist: { wishes: [] },
      wishlistID: this.$route.params.id,
    };
  },

  firestore() {
    return {
      wishlist: db.collection("wishlists").doc(this.wishlistID),
    };
  },
};
</script>
<style scoped>
.friend_wish_list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container_title {
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

.how_it_works {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}

.des_icon {
  width: 4rem;
  margin: 1rem auto;
}

@media (min-width: 640px) {
  .how_it_works {
    flex-direction: row;
  }
  .description {
    width: 33.33%;
    border-bottom: none;
    margin: 1rem;
  }
}
</style>
