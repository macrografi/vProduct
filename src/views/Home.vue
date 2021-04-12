<template>
  <div class="home">
    <Carousel msg="child component" />
    <div class="read-head">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget diam in elit laoreet mollis vitae et quam.
        Suspendisse ac sagittis dolor, at faucibus tellus. Donec sit amet dui a ipsum lobortis elementum. Sed ac tempor
        est. Suspendisse potenti. Proin dictum et urna nec pretium. In at tincidunt ipsum. Donec metus eros, egestas sit
        amet lacus sit amet, rutrum luctus enim. Quisque elementum mattis nisi nec placerat. Sed tristique auctor velit,
        vitae luctus massa accumsan vel.
      </p>
    </div>
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
.read-head {
  width: 100%;
  position: relative;
  padding: 26px 40px 30px 80px;
  h1 {
    font-size: 2rem;
    text-align: left;
    color: #5c3e07;
    font-weight: 600;
  }
  p {
    text-align: justify;
    color: #928059;
  }
}
.read-head:before {
  content: '';
  width: 53px;
  height: 35px;
  position: absolute;
  top: 25px;
  left: 15px;
  background: url('../assets/img/index.png') no-repeat scroll rgba(0, 0, 0, 0);
}
.leaf-1 {
  background: url('../assets/img/_leaf1.png') no-repeat;
}
.leaf-2 {
  background: url('../assets/img/_leaf2.png') no-repeat;
}
.leaf-3 {
  background: url('../assets/img/_leaf3.png') no-repeat;
}
.leaf-4 {
  background: url('../assets/img/_leaf4.png') no-repeat;
}
.leaf-5 {
  background: url('../assets/img/_leaf5.png') no-repeat;
}
</style>
