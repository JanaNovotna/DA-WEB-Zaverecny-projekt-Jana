<template>
  <div class="wish_list">
    <wish
      class="wish"
      v-for="(wish, index) in wishes"
      v-bind:wish="wish"
      v-bind:key="index"
      v-bind:wishlistID="wishlistID"
      v-bind:userType="userType"
    />
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
.wish_list {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

@media (min-width: 640px) {
  .wish_list {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .wish {
    flex: 1 0 45%;
  }
}
</style>
