<template>
  <div class="button">
    <button class="copy_url">Zamluv si mě</button>
  </div>
</template>
<script>
export default {
  name: "BookButton"
};
</script>
<style scoped>
.copy_url {
  background-color: rgba(255, 216, 0, 0.8);
  color: #2c7873;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  font-weight: 600;
}
</style>