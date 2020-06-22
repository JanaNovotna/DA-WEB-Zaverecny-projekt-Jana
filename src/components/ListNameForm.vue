<template>
  <div name="newWish" class="newWish">
    <div class="form__head">
      <h2>Pojmenujte svůj seznam</h2>
    </div>
    <div class="form__body">
      <input
        type="text"
        v-model="$v.list_name.$model"
        id="list_name"
        placeholder="Název seznamu"
      />

      <p class="error" v-if="$v.list_name.required === false">
        Toto pole je povinné
      </p>

      <button v-on:click="submitListName" class="main__button add_btn">
        Odeslat
      </button>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "ListNameForm",

  data() {
    return {
      list_name: "",
    };
  },

  validations: {
    list_name: {
      required,
    },
  },

  methods: {
    hide() {
      this.hide();
    },
    submitListName() {
      this.$emit("push", {
        list_name: this.list_name,
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
  margin: 0 auto;
  max-width: 80%;
  padding: 3rem 0.5rem 2rem;
}

.form__head {
  display: flex;
  justify-content: space-between;
}

.form__body {
  display: flex;
  flex-direction: column;
}

input {
  background-color: #d4d3d3;
  color: #000;
  margin: 1.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
  max-width: 75vw;
}

.add_btn {
  max-width: 75vw;
  margin: 2rem 0;
}

.error {
  color: white;
  font-size: 0.9rem;
}

@media (min-width: 640px) {
  .newWish {
    max-width: 60%;
  }

  .newWish h2 {
    font-size: 2rem;
  }

  .error {
    font-size: 1rem;
  }

  input {
    padding: 0.8rem;
    font-size: 1.2rem;
  }
}

@media (min-width: 1200px) {
  .newWish {
    max-width: 50%;
  }
}
</style>
