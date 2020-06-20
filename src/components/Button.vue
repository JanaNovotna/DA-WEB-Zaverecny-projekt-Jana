<template>
  <div>
    <button
      class="main__button"
      v-if="taken === false && myList === false"
      @click="changeTaken"
    >
      Zamluv si mě
    </button>
    <button
      class="main__button"
      v-else-if="taken === true && myList === false"
      @click="changeTaken"
    >
      Zamluveno
    </button>
    <div class="main__button" v-if="myList === false && anotherUser === true">
      Není k dispozici
    </div>
    <button
      class="main__button"
      v-if="myList === true && taken === false"
      @click="deleteWish"
    >
      Smazat přání
    </button>
    <button
      class="main__button"
      v-if="myList === true && taken === true"
      :disabled="false"
      @click="message"
    >
      Smazat přání
    </button>
  </div>
</template>
<script>
export default {
  name: "BookButton",

  data() {
    return {
      taken: false,
      myList: true,
      anotherUser: false,
      disabled: false,
    };
  },

  methods: {
    changeTaken() {
      this.taken = !this.taken;
      this.$emit("changeTaken");
    },
    message() {
      this.disabled = true;
      window.confirm("Toto přání už nejde smazat.");
    },
    deleteWish() {
      this.$emit("deleteWish");
    },
  },
};
</script>
