<!--我的资料  -->
<template>
  <div class="my">
    <a href="https://cn.ad101.vip/my#my_profile">跳转到登陆界面</a>
  </div>
</template>

<script>
const name = "my";
export default {
  name
}
</script>
<style scoped lang='less'>
.my {
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    line-height: 70px;
    &:active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
