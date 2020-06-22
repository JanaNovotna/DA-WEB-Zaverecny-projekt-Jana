<template>
  <div class="one_wish">
    <div class="wish_content">
      <h3>{{ wish.title }}</h3>
      <p>{{ wish.description }}</p>
      <p>
        <a v-bind:href="wish.link" target="_blank">Odkaz na dárek</a>
      </p>
    </div>
    <div class="wish-btn">
      <myButton
        v-bind:taken="wish.takenBy !== null"
        v-bind:myList="userType === 'owner'"
        v-bind:anotherUser="wish.takenBy !== currentUserID"
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
    myButton: Button
  },

  data() {
    return {
      currentUserID: localStorage.userID
    };
  },

  props: ["wish", "wishlistID", "userType"],

  methods: {
    async changeTaken() {
      const wish = db.collection("wishes").doc(this.wish.id);
      await wish.update({
        takenBy: this.wish.takenBy === null ? localStorage.userID : null
      });
    },
    async deleteWish() {
      const wish = db.collection("wishes").doc(this.wish.id);
      await wish.delete();
      const wishlist = db.collection("wishlists").doc(this.wishlistID);
      await wishlist.update({
        wishes: firebase.firestore.FieldValue.arrayRemove(wish)
      });
    }
  }
};
</script>
<style scoped>
.one_wish {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(112, 111, 111);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
}
.wish_content {
  flex-basis: 75%;
  align-self: flex-start;
  margin-right: 0.5rem;
  /* word-break: break-all; */
  font-weight: 500;
}

.wish_content p {
  margin-top: 0.5rem;
}

.wish_content a {
  color: black;
}

.wish_content a:hover {
  color: #59cbbc;
}

.wish_btn {
  flex-basis: 24%;
  align-self: center;
}
@media (min-width: 640px) {
}
</style>
