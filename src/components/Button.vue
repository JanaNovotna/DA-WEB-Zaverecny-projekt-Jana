<template>
  <div>
    <button class="main__button" v-if="taken === false" @click="changeTaken">Zamluv si mě</button>
    <button class="main__button" v-else @click="changeTaken">Zamluveno</button>
    <button class="main__button" v-if="myList === true">Smazat přání</button>
  </div>
</template>
<script>
export default {
  name: "BookButton",

  data() {
    return {
      taken: false,
      myList: false
    };
  },

  methods: {
    changeTaken() {
      this.taken = !this.taken;
    }
  }
};
</script>
<style scoped>
.book__button {
  width: 15vw;
}
</style>