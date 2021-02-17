<!-- 轮播轮子 -->
<template>
  <div id="demo">
    <div class="group">
      <TransX
        :time="0.7"
        :loop="true"
        :autoplay="true"
        :nextTransition="nextTransition"
        :prevTransition="prevTransition"
        ref="transx"
        @over="over"
        @transitionend="transitionEnd"
      >
        <div
          class="demo-item"
          v-for="(item, index) in list"
          :key="index"
          :index="index + 1"
        >
          {{ index }}
        </div>
      </TransX>
    </div>
    <div class="controller-container">
      <div class="btn-group">
        <div>当前第{{ currentIndex + 1 }}个组件</div>
      </div>

      <div class="btn-group">
        <div class="button" @click="transition('prev')">上一个</div>
        <div class="button" @click="transition('next')">下一个</div>
        <div class="button" @click="goto">跳 转</div>
      </div>

      <div class="btn-group">
        <div class="transition">
          <span>prevTransition </span>
          <select v-model="prevTransition">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.value }}
            </option>
          </select>
        </div>
        <div class="transition">
          <span>nextTransition </span>
          <select v-model="nextTransition">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.value }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransX from "transx";

export default {
  name: "App",
  data: () => {
    return {
      nextTransition: "moveLeftBack",
      prevTransition: "moveRightBack",
      list: ["", "", "", ""],
      currentIndex: 0,
      options: [
        { value: "fadeIn" },
        { value: "fadeOut" },
        { value: "flip" },
        { value: "moveLeftQuart" },
        { value: "moveRightQuart" },
        { value: "moveLeftBack" },
        { value: "moveRightBack" },
        { value: "zoomOutBack" },
        { value: "zoomInBack" },
        { value: "rotateLeftBack" },
        { value: "rotateRightBack" },
        { value: "rotateLeftTop" },
        { value: "rotateRightTop" },
        { value: "zoomRotateIn" },
        { value: "zoomRotateOut" },
        { value: "shuttleLeft" },
        { value: "shuttleRight" },
        { value: "shuttleDown" },
        { value: "shuttleUp" },
        { value: "rollLeft" },
        { value: "rollRight" },
        { value: "scaleXLeft" },
        { value: "scaleXRight" }
      ]
    };
  },
  components: {
    TransX
  },
  methods: {
    transition: function(type) {
      if (type === "next") this.$refs.transx.next();
      else this.$refs.transx.prev();
    },
    goto: function() {
      this.$refs.transx.goto(0);
      this.currentIndex = 0;
    },
    over(isEnd) {
      console.log(isEnd);
    },
    transitionEnd(currentIndex) {
      this.currentIndex = currentIndex;
    },
    handleNext() {
      this.$refs.transx.next();
    }
  }
};
</script>

<style>
.demo-item {
  width: 400px;
  height: 640px;
  background: #33ce21;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 auto;
  text-align: center;
  padding-top: 200px;
  box-sizing: border-box;
  font-size: 48px;
}
.group {
  margin: 0 auto;
  position: relative;
  left: 50%;
  margin-left: -200px;
  height: 650px;
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
}
.controller-container {
  text-align: center;
}
.transition {
  margin: 10px;
}

.comp {
  position: absolute;
  top: 0;
  left: 0;
}

.button {
  margin: 20px auto;
  width: 180px;
  height: 50px;
  background: #fccff2;
  position: relative;
  line-height: 50px;
}
.btn-group .button {
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  height: 40px;
  width: 120px;
  color: #fff;
  background: #22ccff;
  line-height: 40px;
  cursor: pointer;
}
</style>
