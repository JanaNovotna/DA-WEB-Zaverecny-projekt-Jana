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
import Logo from "./Logo1.vue";

export default {
  name: "WishList",

  props: ["wishes", "wishlistID", "userType"],

  components: {
    wish: Wish,
    logo: Logo,
  },
};
</script>
<style scoped>
.wishlist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #dad8d8;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  margin: 0 2rem;
}
.wish {
  max-width: 100%;
  background-color: #dad8d8;
  margin: 2rem;
  border-radius: 10px;
}

@media (min-width: 768px) {
  .wishlist {
    flex-direction: row;
  }

  .wish {
    width: 50%;
  }
}
</style>
