import Vue from 'vue';
import Vuex from 'vuex';
import Product from './modules/product';
import Carousel from './modules/carousel';
/*import Canvas from './modules/canvas';*/
import Particle from './modules/particle';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Product,
    Carousel,
    /*    Canvas,*/
    Particle,
  },
});
