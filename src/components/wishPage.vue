<template>
  <div class="wishpage">
    <div class="container_title">
      <h2>Seznam mých přání</h2>
    </div>

    <wishList />
    <div class="container_button">
      <button>Tady je odkaz pro sdílení</button>
    </div>
  </div>
</template>
<script>
import WishList from "./WishList.vue";

export default {
  name: "WishPage",

  components: {
    wishList: WishList
  }
};
</script>
<style scoped>
.wishpage {
  margin: 10vh 0;
  width: 60%;
  background-color: #2c7873;
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
  margin-bottom: 5vh;
}
</style>