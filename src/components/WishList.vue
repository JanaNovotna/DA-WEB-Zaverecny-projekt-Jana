<template>
  <div class="wishListPage">
    <div class="wishlist">
      <wish
        v-for="(wish, index) in wishes"
        v-bind:wish="wish"
        v-bind:idx="index"
        v-bind:key="index"
      />
    </div>
  </div>
</template>
<script>
import Wish from "./Wish.vue";
import Logo from "./Logo1.vue";

export default {
  name: "WishList",

  props: ["wishes"],

  components: {
    wish: Wish,
    logo: Logo,
  },
};
</script>
<style scoped>
.wishlistPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wishlist {
  background-color: #6fb98f;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: 3rem;
  border-radius: 10px;
}
</style>
