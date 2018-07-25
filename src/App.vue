<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="student in blogs" :key="student.id">
         <h4>{{ student.title}}</h4>
         <p> {{ student.body }}</p>

      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import store from './store/store';

export default {
  name: 'App',
   computed: {
     blogs() {
       return store.state.data
     }
  },
  created() {
    store.dispatch('getStudents')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
