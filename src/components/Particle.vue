<template>
  <div class="viewport"></div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    ...mapMutations(['RESIZE', 'POINTERMOVE']),
    ...mapActions(['INIT', 'ANIMATE']),
  },
  mounted() {
    this.INIT({
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight,
      el: this.$el,
    }).then(() => {
      this.ANIMATE();
      window.addEventListener(
        'resize',
        () => {
          this.RESIZE({
            width: this.$el.offsetWidth,
            height: this.$el.offsetHeight,
          });
        },
        true,
      );
      window.addEventListener('pointermove', event => {
        this.POINTERMOVE({
          event: event,
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight,
        });
      });
    });
  },
};
</script>

<style>
.viewport {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
