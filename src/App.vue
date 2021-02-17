<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";

const name = "app";
export default {
  name,
  components: {
    Header
    // Footer
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #333333;
  background: #ffffff;
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
}
</style>
