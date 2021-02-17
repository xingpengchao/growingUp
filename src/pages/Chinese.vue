<!-- 中文 -->
<template>
  <div class="uncensored">
    <Slider :items="items" :width="800" :start="30" :end="150"></Slider>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";

const name = "chinese";
export default {
  name,
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          enable: true,
          value: 10,
          background: "#409eff"
        },
        {
          enable: true,
          value: 20,
          background: "green"
        },
        {
          enable: true,
          value: 10,
          background: "#f60"
        },
        {
          enable: true,
          value: 30,
          background: "purple"
        },
        {
          enable: true,
          value: 20,
          background: "#f60"
        },
        {
          enable: true,
          value: 30,
          background: "#f60"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
.uncensored {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
</style>
