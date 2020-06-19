<template>
  <div class="list">
    <ourLogo />
    <p>Vídíme, že máte svůj seznam již vytvořený. Když kliknete sem:</p>
    <button class="main__button">Chci vidět svůj seznam dárků.</button>
    <p>
      tak se k němu dostanete a můžete jej dle potřeby upravit a znovu odesalt
      svým přátelům.
    </p>
  </div>
</template>
<script>
import Logo from "./Logo1.vue";
export default {
  name: "ExistingList",
  components: {
    ourLogo: Logo,
  },
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
</style>
