<template>
  <div class="wishListPage">
    <div class="wishlist">
      <wish
        v-for="(wish, index) in wishes"
        v-bind:title="wish.title"
        v-bind:description="wish.description"
        v-bind:link="wish.link"
        v-bind:key="index"
      />
    </div>
  </div>
</template>
<script>
import Wish from "./Wish.vue";
import Logo from "./Logo1.vue";

export default {
  name: "WishList",
  data() {
    return {
      wishes: [
        {
          title: "Lízátko",
          description: "Velké, červeno-bílé, sladké.",
          link: "https://static.glami.cz/img/520x520bt/212315474.jpg",
        },
        {
          title: "Omalovánky",
          description: "Včetně pastelek.",
          link:
            "https://www.detskyusmev.eu/fotky79138/fotos/_vyrn_3864b96536124.jpg",
        },
        {
          title: "Autíčko na dálkové ovládání",
          description: "Hasiči nebo policajti.",
          link: "https://cdn.alza.cz/ImgW.ashx?fd=f3&cd=HRAif10801",
        },
      ],
    };
  },

  components: {
    wish: Wish,
    logo: Logo,
  },
};
</script>
<style scoped>
.wishlistPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wishlist {
  background-color: #6fb98f;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: 3rem;
  border-radius: 10px;
}
</style>
