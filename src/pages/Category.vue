<!-- 选择玩法 -->
<template>
  <div class="uncensored">我是选择玩法页面</div>
</template>

<script>
import axios from "axios"; // 引入axios

const name = "category";
export default {
  name,
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    axios.get("/getDemoList").then(res => {
      // url即在mock.js中定义的
      console.log(res.data); // 打印一下响应数据
    });
  },
  methods: {}
};
</script>
<style scoped lang="less"></style>
