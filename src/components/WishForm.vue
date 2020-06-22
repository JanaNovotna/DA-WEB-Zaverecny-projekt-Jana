<template>
  <div name="newWish" class="newWish">
    <div class="form__head">
      <h2>Přidání nového dárku:</h2>
    </div>
    <div class="form__body">
      <label for="title">Název dárku:</label>
      <input type="text" v-model="$v.title.$model" id="title" />

      <p class="error" v-if="$v.title.required === false">
        Toto pole je povinné
      </p>

      <label for="popis">Krátký popis dárku:</label>
      <textarea
        v-model="$v.description.$model"
        id="popis"
        cols="30"
        rows="10"
      ></textarea>

      <p class="error" v-if="$v.description.required === false">
        Toto pole je povinné
      </p>

      <label for="web_address">Odkaz:</label>
      <input type="url" v-model="$v.link.$model" id="web_address" />

      <p class="error" v-if="$v.link.url === false">
        Zadejte prosím platné URL
      </p>

      <button v-on:click="addPresent" class="main__button add_btn">
        Přidat dárek na seznam
      </button>
    </div>
  </div>
</template>
<script>
import { required, url } from "vuelidate/lib/validators";

export default {
  name: "NewWish",

  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },

  validations: {
    title: {
      required,
    },
    description: {
      required,
    },
    link: {
      url,
    },
  },

  props: ["idx"],

  methods: {
    hide() {
      this.hide();
    },
    addPresent() {
      this.$emit("push", {
        title: this.title,
        description: this.description,
        link: this.link,
      });
      this.$emit("hide");
    },
  },
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
  font-size: 1rem;
  margin: 0.75rem;
}

.add_btn {
  width: 30vw;
  margin: 2rem;
}

.error {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
</style>
