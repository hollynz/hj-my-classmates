<template>
  <div class="header">
    <nav class="nav">
      <ul>
        <li><router-link v-bind:to="'/'" exact>Home</router-link></li>
        <li><router-link v-bind:to="'/geoffscomponent'" exact>Geoffs Component</router-link></li>
        <li><router-link v-bind:to="'/jeremy'">Jeremy</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
</style>
