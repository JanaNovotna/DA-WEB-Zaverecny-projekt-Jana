<template>
  <div class="newWish">
    <h2>Přidání nového dárku:</h2>
    <label for="title">Název dárku:</label>
    <input type="text" v-model="title" id="title" />
    <label for="popis">Krátký popis dárku:</label>
    <textarea v-model="description" id="popis" cols="30" rows="10"></textarea>
    <label for="web_address">Odkaz:</label>
    <input type="url" v-model="link" id="web_address" />
    <button v-on:click="addPresent" class="add__present">
      Přidat dárek na seznam
    </button>
  </div>
</template>
<script>
export default {
  name: "NewWish",
  data() {
    return {
      title: "",
      descriptin: "",
      link: "",
    };
  },
  methods: {
    addPresent() {},
  },
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

/* .add__present {
  font-family: "Roboto Slab", serif;
  background-color: rgba(255, 217, 0, 0.884);
  color: #004445;
  max-width: 20vw;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
  float: right;
}

.add__present:hover {
  background-color: #004445;
  color: rgba(255, 217, 0, 0.884);
  border: 1px solid rgb(255, 217, 0, 0.884);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
} */
</style>
