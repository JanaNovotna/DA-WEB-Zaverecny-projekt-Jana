<template>
  <div class="one_wish">
    <div class="wish_container">
      <div class="wish_content">
        <h3>{{ wish.title }}</h3>
        <p>{{ wish.description }}</p>
      </div>

      <p class="wish_link" v-if="wish.link !== ''">
        <a v-bind:href="wish.link" target="_blank">Odkaz na dárek</a>
      </p>
      <p class="wish_link_empty" v-else></p>
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
    myButton: Button,
  },

  data() {
    return {
      currentUserID: localStorage.userID,
    };
  },

  props: ["wish", "wishlistID", "userType"],

  methods: {
    async changeTaken() {
      const wish = db.collection("wishes").doc(this.wish.id);
      await wish.update({
        takenBy: this.wish.takenBy === null ? localStorage.userID : null,
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
.one_wish {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid rgb(112, 111, 111);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
}

.wish_container {
  align-self: flex-start;
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.wish_content {
  margin-right: 0.5rem;
  /* word-break: break-all; */
  font-weight: 500;
}

.wish_content p {
  margin-top: 0.5rem;
}

.wish_link {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 500;
}

.wish_link a {
  color: black;
}

.wish_link a:hover {
  color: #59cbbc;
}

.wish_btn {
  flex-basis: 24%;
}

.wish_link_empty {
  padding: 1rem;
}

@media (min-width: 640px) {
}
</style>
