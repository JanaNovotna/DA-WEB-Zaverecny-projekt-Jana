<template>
  <div name="newWish" class="newWish">
    <div class="form__head">
      <h2>Pojmenujte svůj seznam</h2>
    </div>
    <div class="form__body">
      <input type="text" v-model="list_name" id="list_name" placeholder="Název seznamu" />

      <button v-on:click="submitListName" class="main__button add_btn">Odeslat</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListNameForm",

  data() {
    return {
      list_name: ""
    };
  },

  methods: {
    hide() {
      this.hide();
    },
    submitListName() {
      this.$emit("push", {
        list_name: this.list_name
      });
      this.$emit("hide");
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
  font-size: 1rem;
}

.add_btn {
  width: 30vw;
  margin: 2rem;
}
</style>
