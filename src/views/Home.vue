<template>
  <div class="home">
    <Carousel msg="child component" />
    <div class="particle100"></div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
  },
  created() {
    this.$store.dispatch('loadCarousels');
    let carousels = this.$store.getters;
    console.log(carousels);
  },
};
</script>
<style lang="scss">
body {
  background: url('../assets/img/Bg.jpg') no-repeat fixed center top/100% auto #2b0d02;
}
.particle100 {
  background: url('../assets/img/maple-leaf-new.png') no-repeat;
}
.leaf-1 {
  background: url('../assets/img/leaf_1.png') no-repeat;
}
.leaf-2 {
  background: url('../assets/img/leaf_2.png') no-repeat;
}
.leaf-3 {
  background: url('../assets/img/leaf_3.png') no-repeat;
}
</style>
