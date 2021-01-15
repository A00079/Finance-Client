<template>
  <div id="app">
    <nav id="nav">
      <Navbar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
