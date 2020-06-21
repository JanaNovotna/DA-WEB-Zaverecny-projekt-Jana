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
      v-else-if="taken === true && myList === false && anotherUser === false"
      @click="changeTaken"
    >
      Zamluveno
    </button>
    <div
      class="main__button"
      v-if="myList === false && anotherUser === true && taken === true"
    >
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

  props: ["taken", "myList", "anotherUser"],

  data() {
    return {
      disabled: false,
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
    },
  },
};
</script>
