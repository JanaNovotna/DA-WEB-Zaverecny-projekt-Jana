<template>
  <div class="wish">
    <div class="container_content">
      <h3>{{ wish.title }}</h3>
      <p>{{ wish.description }}</p>
      <p>
        Odkaz:
        <a v-bind:href="wish.link" target="_blank">ZDE</a>
      </p>
    </div>
    <div class="container_button">
      <myButton
        v-bind:taken="wish.taken"
        v-bind:myList="userType === 'owner'"
        v-bind:anotherUser="userType === 'donor'"
        v-on:changeTaken="changeTaken()"
        v-on:deleteWish="deleteWish()"
      />
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
import db from "../db";
import firebase from "firebase/app";

export default {
  name: "Wish",
  components: {
    myButton: Button,
  },
  props: ["wish", "wishlistID", "userType"],

  methods: {
    async changeTaken() {
      const wish = db.collection("wishes").doc(this.wish.id);
      await wish.update({
        taken: !this.wish.taken,
      });
    },
    async deleteWish() {
      const wish = db.collection("wishes").doc(this.wish.id);
      await wish.delete();
      const wishlist = db.collection("wishlists").doc(this.wishlistID);
      await wishlist.update({
        wishes: firebase.firestore.FieldValue.arrayRemove(wish),
      });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  color: #004445;
}

.wish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4vh 0;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
}

.container_button {
  display: flex;
  justify-content: right;
}

@media (min-width: 640px) {
  .wish {
    flex-direction: row;
    margin: 5vh 0;
  }

  .container_button {
    align-items: flex-start;
  }
}
</style>
