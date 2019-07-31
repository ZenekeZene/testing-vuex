import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 3,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    actionA( {commit} ) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation');
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return this.dispatch('actionA').then(() = >{
        commit('someOtherMutation');
      });
    },
    async actionC ({ commit }) {
      commit('gotData', await getData())
    },
    async actionD ({ dispatch, commit} ) {
      await dispatch('actionC')
      commit('gotOtherData', await getOtherData())
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    // (1)
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    // (2)
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
    // (1) Property-Style Access : Getters will also receive other getters as the 2nd argument:
    // (2) Method-Style Access:
    // You can also pass arguments to getters by returning a function. This is particularly useful when you want to query an array in the store:
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
