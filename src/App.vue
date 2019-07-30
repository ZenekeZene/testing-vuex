<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>count: {{ count }}</p>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      localCount: 4
    };
  },
  computed: {
    ...mapState([
      // (1)
      "count"
    ]),
    ...mapGetters([
      // (2)
      "doneTodos",
      "doneTodosCount",
      "getTodoById"
    ]),
    localComputed() {
      // (3)
      return true;
    }
    // (4)
    // ...mapGetters({
    //    doneCount: 'doneTodosCount',
    // })
  }
  /*
    (1) Instead of:
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
        return state.count + this.localCount;
    }

    (2) Instead of:
    doneTodos() {
        return state.getters.doneTodos;
    },
    doneTodosCount() {
        return state.getters.doneTodosCount;
    },
    doneTodoById() {
        return state.getters.doneTodoById;
    },

    (3) We can combine mapState, mapGetters helpers and local computed properties
    // with object spread operator.

    (4) If you want to map a getter to a different name, use an object. (Alias)
    */
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
