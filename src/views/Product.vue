<template>
  <div class="read-head">
    <h1>Product Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget diam in elit laoreet mollis vitae et quam.
      Suspendisse ac sagittis dolor, at faucibus tellus. Donec sit amet dui a ipsum lobortis elementum. Sed ac tempor
      est. Suspendisse potenti. Proin dictum et urna nec pretium. In at tincidunt ipsum. Donec metus eros, egestas sit
      amet lacus sit amet, rutrum luctus enim. Quisque elementum mattis nisi nec placerat. Sed tristique auctor velit,
      vitae luctus massa accumsan vel.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  created() {
    this.$store.dispatch('loadProducts');
    let products = this.$store.getters;
    console.log(products);
  },
};
</script>
