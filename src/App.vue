<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import GeoffsComponent from "./components/Geoff/GeoffsComponent";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    MyHeader,
    GeoffsComponent,
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
