import Vue from 'vue';

const state = {
  products: [],
};

const getters = {
  products: state => state.products,
};

const actions = {
  loadProducts({ commit }) {
    Vue.axios.get('http://localhost:3000/products').then(resp => {
      let data = resp.data;

      if (data) {
        commit('SET_PRODUCTS', data);
      } else {
        console.log('not found data');
      }
    });
  },
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
