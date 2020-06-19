<template>
  <div name="newWish" class="newWish">
    <div class="form__head">
      <h2>Přidání nového dárku:</h2>
    </div>
    <div class="form__body">
      <label for="title">Název dárku:</label>
      <input type="text" v-model="title" id="title" />
      <label for="popis">Krátký popis dárku:</label>
      <textarea v-model="description" id="popis" cols="30" rows="10"></textarea>
      <label for="web_address">Odkaz:</label>
      <input type="url" v-model="link" id="web_address" />
      <button v-on:click="addPresent" class="main__button add_btn">Přidat dárek na seznam</button>
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
export default {
  name: "NewWish",
  components: {
    ourMenu: Menu
  },
  data() {
    return {
      title: "",
      description: "",
      link: ""
    };
  },

  props: ["idx"],

  methods: {
    addPresent() {
      this.$emit("push", idx);
    }
  }
};
</script>
<style scoped>
.newWish {
  color: #cac5be;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  width: 95vw;
  margin: 0 auto;
}

.form__head {
  display: flex;
  justify-content: space-between;
}

.form__body {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  background-color: #d4d3d3;
  color: #000;
  margin: 0.75rem;
}

.add_btn {
  width: 30vw;
  margin: 2rem;
}
</style>
