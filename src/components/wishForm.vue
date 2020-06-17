<template>
  <div class="wish">
    <h2>Přidání nového dárku:</h2>
    <label for="title">Název dárku:</label>
    <input type="text" v-model="title" id="title" />
    <label for="popis">Krátký popis dárku:</label>
    <textarea v-model="popis" id="popis" cols="30" rows="10"></textarea>
    <label for="web_address">Odkaz:</label>
    <input type="url" v-model="address" id="web_address" />
    <label for="photo">Obrázek dárku:</label>
    <input type="file" name="photo" id />
    <button v-on:click="addPresent" class="add__present">Přidat dárek na seznam</button>
  </div>
</template>
<script>
export default {
  name: "Wish",
  data() {
    return {
      title: "",
      popis: "",
      address: ""
    };
  }
};
</script>
<style scoped>
.wish {
  background-color: #004445;
  color: #e7dfd5;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 80vw;
}

input,
textarea {
  background-color: #e7dfd5;
  color: #000;
  margin: 0.75rem;
}

.add__present {
  background-color: #ffd800;
  color: #004445;
  max-width: 15vw;
  border-radius: 5px;
}
</style>
