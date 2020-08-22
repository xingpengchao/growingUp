<!-- 卡片 -->
<template>
  <div class="card">
    <a :href="href">
      <img :src="src" alt="" class="card-img" />
    </a>
    <div class="card-title">
      <a :href="href">{{ title }}</a>
    </div>
    <div class="card-name">{{ name }}</div>
    <el-rate
      class="card-rate"
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
    >
    </el-rate>
  </div>
</template>

<script>
const name = "card";
export default {
  name,
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    name: {
      type: String,
      default: "",
      required: true
    },
    src: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: "#",
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped lang="less">
.card {
  width: 22%;
  margin: 8px 0 0 12px;
  padding: 5px 15px;
  &-img {
    width: 100%;
    height: 230px;
    cursor: pointer;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.1);
    }
  }
  &-title {
    font-size: 18px;
    margin: 8px 0;
    padding-top: 5px;
    float: left;
    a {
      color: #ecd1bb;
      text-decoration: none;
      overflow: hidden;
      &:hover {
        color: #42b983;
      }
    }
  }
  &-name {
    font-size: 16px;
    font-weight: bold;
    color: #b3b3b3;
    margin: 0;
    float: left;
  }
  &-rate {
    float: right;
    height: 10px;
    line-height: 10px;
    margin-top: 3px;
  }
}
</style>
