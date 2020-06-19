<template>
  <div>
    <ourMenu />
    <!-- <div v-if="isModalOpen" class="modal">
      <wishForm />
    </div> -->
  </div>
</template>
<script>
import Menu from "./Menu.vue";
import WishForm from "./WishForm.vue";
export default {
  name: "ListPage",
  components: {
    ourMenu: Menu,
    wishForm: WishForm,
  },
  // data() {
  //   return {
  //     isModalOpen: false,
  //   };
  // },
  methods: {
    show() {
      this.$modal.show("newWish");
    },
    hide() {
      this.$modal.hide("newWish");
    },
  },
};
</script>
<style scoped>
.modal {
  position: absolute;
  left: auto;
  right: auto;
}
</style>
