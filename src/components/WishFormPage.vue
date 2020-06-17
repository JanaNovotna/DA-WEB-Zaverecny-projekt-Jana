<template>
  <div class="newWish">
    <h2>Přidání nového dárku:</h2>
    <label for="title">Název dárku:</label>
    <input type="text" v-model="title" id="title" />
    <label for="popis">Krátký popis dárku:</label>
    <textarea v-model="description" id="popis" cols="30" rows="10"></textarea>
    <label for="web_address">Odkaz:</label>
    <input type="url" v-model="link" id="web_address" />
    <button v-on:click="addPresent" class="main__button">Přidat dárek na seznam</button>
  </div>
</template>
<script>
export default {
  name: "NewWish",
  data() {
    return {
      title: "",
      descriptin: "",
      link: ""
    };
  },
  methods: {
    addPresent() {}
  }
};
</script>
<style scoped>
.newWish {
  background-color: #004445;
  color: #e7dfd5;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95vw;
  margin: 0 auto;
}

input,
textarea {
  background-color: #e7dfd5;
  color: #000;
  margin: 0.75rem;
}
</style>
