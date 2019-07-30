<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
	{{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "app",
  data() {
	  return {
		  localCount: 4 
	  }
  },
  computed: mapState([
	  'count'
  ]), 
	/*
	count: state => state.count,
	countAlias: 'count',
	countPlusLocalState (state) {
		return state.count + this.localCount;
	}
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
