<!-- 头部导航 -->
<template>
  <div class="header">
    <img
      class="header-logo"
      src="https://meta-web.hoverfree.com/build/img/YuIpg3d.jpg"
      alt="avhd101 logo"
      style="width:200px"
    />
    <div class="header-nav">
      <router-link to="/">永久网址</router-link>
      <router-link to="/hd">高清</router-link>
      <router-link to="/chinese">中文</router-link>
      <router-link to="/uncensored">无码</router-link>
      <router-link to="/rank">热门排行</router-link>
      <router-link to="/category">选择玩法</router-link>
      <router-link to="/my">我的</router-link>
    </div>
    <Search class="header-search"></Search>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";

const name = "header";
export default {
  name,
  components: {
    Search
  }
}
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 70px;
  background-color: #333333;
  padding: 0 100px;
  box-sizing: border-box;
  &-logo {
    float: left;
  }
  &-nav {
    margin: 0 auto;
    margin-right: 120px;
    padding: 0 15px;
    a {
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      line-height: 70px;
      margin: 0 30px;
      &.router-link-exact-active {
        color: #42b983;
      }
      &:hover {
        color: #42b983;
      }
    }
  }
}
</style>
