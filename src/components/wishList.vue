<template>
  <div class="wishlist">
    <wish
      v-for="(wish, index) in wishes"
      v-bind:title="wish.title"
      v-bind:description="wish.description"
      v-bind:link="wish.link"
      v-bind:key="index"
    />
  </div>
</template>
<script>
import Wish from "./Wish.vue";

export default {
  name: "WishList",
  data() {
    return {
      wishes: [
        {
          title: "Lízátko",
          description: "Velké, červeno-bílé, sladké.",
          link: "https://static.glami.cz/img/520x520bt/212315474.jpg"
        },
        {
          title: "Omalovánky",
          description: "Včetně pastelek.",
          link:
            "https://www.detskyusmev.eu/fotky79138/fotos/_vyrn_3864b96536124.jpg"
        },
        {
          title: "Autíčko na dálkové ovládání",
          description: "Hasiči nebo policajti.",
          link: "https://cdn.alza.cz/ImgW.ashx?fd=f3&cd=HRAif10801"
        }
      ]
    };
  },

  components: {
    wish: Wish
  }
};
</script>
<style scoped>
</style>