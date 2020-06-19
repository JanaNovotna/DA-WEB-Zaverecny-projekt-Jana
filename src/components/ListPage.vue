<template>
  <div>
    <ourMenu />
    <wishForm />
  </div>
</template>
<script>
import Menu from "./Menu.vue";
import WishForm from "./WishForm.vue";
export default {
  name: "ListPage",
  components: {
    ourMenu: Menu,
    wishForm: WishForm
  }
};
</script>
