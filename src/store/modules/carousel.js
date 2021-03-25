import Vue from 'vue';

const state = {
  carousel: [],
};
const getters = {
  carousel: state => state.carousel,
};
const actions = {
  loadCarousels({ commit }) {
    Vue.axios.get('http://localhost:3000/carousels').then(resp => {
      let data = resp.data;

      if (data) {
        commit('SET_CAROUSEL', data);
      } else {
        console.log('not found data');
      }
    });
  },
};
const mutations = {
  SET_CAROUSEL(state, carousel) {
    state.carousel = carousel;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
