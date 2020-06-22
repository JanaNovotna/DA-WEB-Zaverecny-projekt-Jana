<template>
  <div>
    <button
      class="wish_button"
      v-if="taken === false && myList === false"
      @click="changeTaken"
    >Zamluv si mě</button>
    <button
      class="wish_button"
      v-else-if="taken === true && myList === false && anotherUser === false"
      @click="changeTaken"
    >Zamluveno</button>
    <div
      class="not_available"
      v-if="myList === false && anotherUser === true && taken === true"
    >Není k dispozici</div>
    <button
      class="remove_wish_button"
      v-if="myList === true && taken === false"
      @click="deleteWish"
    >Smazat přání</button>
    <button
      class="remove_wish_button"
      v-if="myList === true && taken === true"
      :disabled="false"
      @click="message"
    >Smazat přání</button>
  </div>
</template>
<script>
export default {
  name: "BookButton",

  props: ["taken", "myList", "anotherUser"],

  data() {
    return {
      disabled: false
    };
  },

  methods: {
    changeTaken() {
      this.$emit("changeTaken");
    },
    message() {
      this.disabled = true;
      window.confirm("Toto přání už nejde smazat.");
    },
    deleteWish() {
      this.$emit("deleteWish");
    }
  }
};
</script>

<style scoped>
.wish_button {
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  background-color: rgba(89, 203, 188, 0.6);
  color: rgb(63, 62, 62);
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.wish_button:hover {
  color: #fff;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.not_available {
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  background-color: rgba(89, 203, 188, 0.6);
  color: rgb(80, 79, 79);
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
}

.remove_wish_button {
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  background-color: rgba(89, 203, 188, 0.6);
  color: rgb(63, 62, 62);
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.remove_wish_button:hover {
  color: rgb(141, 44, 31);
  box-shadow: 0 12px 16px 0 rgba(141, 44, 31, 0.24),
    0 17px 50px 0 rgba(141, 44, 31, 0.19);
}
</style>
