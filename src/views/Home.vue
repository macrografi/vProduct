<template>
  <div class="home">
    <HelloWorld msg="child component" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    this.$store.dispatch("loadCarousels");
    let carousels = this.$store.getters;
    console.log(carousels);
  }
};
</script>
<style lang="scss">
body {
  background: url("../assets/img/Bg.jpg") no-repeat fixed center top/100% auto
    #2b0d02;
}
</style>
