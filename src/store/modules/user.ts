import Vue from "vue";
import Vuex, { Module } from "vuex";
Vue.use(Vuex);

export const userMod: Module<any, any> = {
    state: {
      user: {},
      usersList: []
    },
    mutations: {
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
    getters: {
      allUsers(state) {
        return state.usersList
      },
      currentUser(state) {
        return state.user
      }
    }
}