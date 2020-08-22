<!-- 搜索框 -->
<template>
  <div class="search">
    <el-input
      class="search-input"
      placeholder="请输入内容"
      v-model="input"
      clearable
    >
    </el-input>
    <el-button class="search-button" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
const name = "search";
export default {
  name,
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style scoped lang="less">
.search {
  width: 240px;
  height: 32px;
  &-input {
    position: absolute;
    width: 200px;
    right: 149px;
    top: 15px;
  }
  &-button {
    height: 40px;
    position: absolute;
    right: 62px;
    top: 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
