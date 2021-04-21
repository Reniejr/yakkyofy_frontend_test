import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    usersList: [],
    user: {},
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    setUsersList(state, usersList) {
      state.usersList = usersList;
    },
    setUser(state, user) {
      state.user = user;
    },
    addUser(state, user) {
      state.usersList = state.usersList.concat(user)
    },
  },
  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    setUsersList({ commit }, usersList) {
      commit("setUsersList", usersList);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    addUser({ commit }, user) {
      commit("addUser", user);
    },
  },
});
