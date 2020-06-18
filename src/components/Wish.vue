<template>
  <div class="wish">
    <div class="container_content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>
        Odkaz:
        <a v-bind:href="link" target="_blank">ZDE</a>
      </p>
    </div>
    <div class="container_button">
      <book />
    </div>
  </div>
</template>
<script>
import BookButton from "./BookButton.vue";
import DeleteButton from "./DeleteButton.vue";
import ReleaseButton from "./ReleaseButton.vue";

export default {
  name: "Wish",
  components: {
    book: BookButton,
    delete: DeleteButton,
    release: ReleaseButton,
  },
  props: ["title", "description", "link"],
};
</script>
<style scoped>
a {
  text-decoration: none;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  color: #004445;
}

.wish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4vh 0;
  border: 1px solid #004445;
  border-radius: 10px;
  padding: 1rem;
}

@media (min-width: 640px) {
  .wish {
    flex-direction: row;
    margin: 5vh 0;
  }

  .container_button {
    display: flex;
    align-items: flex-start;
  }
}
</style>
