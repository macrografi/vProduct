<template>
  <div class="product">
    <h1>This is an product page</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
  created() {
    this.$store.dispatch("loadProducts");
    let products = this.$store.getters;
    console.log(products);
  }
};
</script>
