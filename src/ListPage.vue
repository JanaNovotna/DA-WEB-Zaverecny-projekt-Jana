<template>
  <div>
    <ourMenu />
    <wishForm />
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
import WishForm from "./components/WishForm.vue";
export default {
  name: "ListPage",
  components: {
    ourMenu: Menu,
    wishForm: WishForm,
  },
};
</script>
