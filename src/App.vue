<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>count: {{ count }}</p>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
    <button @click='increment'>+</button>
    <button @click="incrementBy({ 'amount': 4 })">+4</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      localCount: 4
    };
  },
  computed: {
    ...mapState([
      "count"
    ]),
    ...mapGetters([
      "doneTodos",
      "doneTodosCount",
      "getTodoById"
    ]),
    localComputed() {
      return true;
    }
  },
  methods:{
    ...mapMutations([
        'increment',
    ]),
    ...mapMutations({
        add: 'incrementBy', // Alias
    }),
  },
};

// Mutations must be synchronous.
// Reason https://vuex.vuejs.org/guide/mutations.html#on-to-actions: 
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
