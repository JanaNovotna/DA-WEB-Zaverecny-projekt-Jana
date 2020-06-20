<template>
  <div>
    <h2>Seznam přání</h2>
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
h2 {
  text-align: center;
}
</style>
