<template>
  <div class="list">
    <p>Vídíme, že máte svůj seznam již vytvořený. Když kliknete sem:</p>
    <button class="existing__list">Chci vidět svůj seznam dárků.</button>
    <p>
      tak se k němu dostanete a můžete jej dle potřeby upravit a znovu odesalt
      svým přátelům.
    </p>
  </div>
</template>
<script>
export default {
  name: "ExistingList",
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  text-align: center;
}
.existing__list {
  font-family: "Roboto Slab", serif;
  font-size: 1.2rem;
  background-color: rgba(255, 217, 0, 0.884);
  color: #2c7873;
  max-width: 20vw;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  transition-duration: 0.4s;
}

.existing__list:hover {
  background-color: #2c7873;
  color: rgba(255, 217, 0, 0.849);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
