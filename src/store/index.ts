import Vue from "vue";
import Vuex, { Module } from "vuex";
import { userMod } from './modules/user'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userMod
  },
  state: {
    showModal: false,
    loader: false
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal
    },
    setLoader(state) {
      state.loader = !state.loader
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    setLoader({ commit }) {
      commit("setLoader")
    }
  },
  plugins: [createPersistedState()]
});
