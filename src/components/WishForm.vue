<template>
<<<<<<< HEAD
  <div name="newWish" class="newWish">
=======
  <modal
    name="newWish"
    class="newWish"
    :width="600"
    :height="300"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <b>{{ time }}</b>
>>>>>>> bb06cd4ad0f2dfd0d79a731dfd7684939e1fe402
    <ourMenu />
    <h2>Přidání nového dárku:</h2>
    <label for="title">Název dárku:</label>
    <input type="text" v-model="title" id="title" />
    <label for="popis">Krátký popis dárku:</label>
    <textarea v-model="description" id="popis" cols="30" rows="10"></textarea>
    <label for="web_address">Odkaz:</label>
    <input type="url" v-model="link" id="web_address" />
    <button v-on:click="addPresent" class="main__button add_btn">Přidat dárek na seznam</button>
<<<<<<< HEAD
  </div>
=======
  </modal>
>>>>>>> bb06cd4ad0f2dfd0d79a731dfd7684939e1fe402
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
<<<<<<< HEAD
      link: ""
=======
      link: "",
      time: 0,
      duration: 5000
>>>>>>> bb06cd4ad0f2dfd0d79a731dfd7684939e1fe402
    };
  },

  props: ["idx"],

  methods: {
<<<<<<< HEAD
    addPresent() {}
=======
    addPresent() {
      this.$emit("push", idx);
    },
    beforeOpen(event) {
      console.log(event);
      // Set the opening time of the modal
      this.time = Date.now();
    },
    beforeClose(event) {
      console.log(event);
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.cancel();
      }
    }
>>>>>>> bb06cd4ad0f2dfd0d79a731dfd7684939e1fe402
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

.add_btn {
  width: 30vw;
}
</style>
