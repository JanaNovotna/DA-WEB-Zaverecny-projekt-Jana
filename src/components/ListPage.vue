<template>
  <div>
    <div class="container_title">
      <h1>Seznam přání</h1>
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
    wishList: WishList
  },
  data() {
    return {
      wishlist: { wishes: [] },
      wishlistID: this.$route.params.id
    };
  },
  firestore() {
    return {
      wishlist: db.collection("wishlists").doc(this.wishlistID)
    };
  }
};
</script>
<style scoped>
.container_title {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/banner.jpg");
  background-position: center center;
  background-size: cover;
  height: 15vh;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
