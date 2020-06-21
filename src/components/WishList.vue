<template>
  <div class="wishListPage">
    <div class="wishlist">
      <wish
        class="wish"
        v-for="(wish, index) in wishes"
        v-bind:wish="wish"
        v-bind:key="index"
        v-bind:wishlistID="wishlistID"
        v-bind:userType="userType"
      />
    </div>
  </div>
</template>
<script>
import Wish from "./Wish.vue";

export default {
  name: "WishList",

  props: ["wishes", "wishlistID", "userType"],

  components: {
    wish: Wish
  }
};
</script>
<style scoped>
.wishlist {
  display: flex;
  flex-direction: column;

  background-color: #f2f8f8;
  margin: 2rem;
}
.wish {
  width: 100%;
  background-color: #f2f8f8;
  margin: 1rem 0;
  border-radius: 10px;
}

@media (min-width: 640px) {
  .wishlist {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wish {
    width: 40%;
    margin: 1rem;
  }
}
</style>
