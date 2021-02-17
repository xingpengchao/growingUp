<template>
  <div class="slider" ref="slider" :style="{ width: `${width}px` }">
    <div class="slider__runway">
      <!-- 首个固定圆环 -->
      <div class="slider__button-wrapper-start">
        <div class="slidder-poptip" style="position: absolute;top: -20px;">
          <span>{{ start }}</span>
        </div>
        <div class="slider__button-start" />
      </div>
      <!-- 动态滑动圆环 -->
      <div v-for="(item, index) in items" :key="`${item}_${index}`">
        <div v-if="item.enable">
          <div
            class="slider__bar"
            :style="
              'width: ' +
                calcBgWidth(index) +
                '%; left: ' +
                calcLeft(index) +
                '%;background:' +
                item.background
            "
          />
        </div>
        <div
          @mousedown="onDragStart($event, index)"
          @mousemove="onDragging"
          @mouseup="onDragEnd"
          class="slider__button-wrapper"
          :style="'left:' + calcLeft(index) + '%;'"
        >
          <div v-if="calcDisp(item, index)">
            <div
              class="slidder-poptip"
              ref="poptip"
              style="position: absolute; top: -20px;"
            >
              <span>{{ getBtnTip(index) }}</span>
            </div>
            <div class="slider__button" />
          </div>
        </div>
      </div>
      <!-- 末尾固定圆环 -->
      <div class="slider__button-wrapper-end">
        <div class="slidder-poptip" style="position: absolute;top: -20px;">
          <span>{{ end }}</span>
        </div>
        <div class="slider__button-end" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      isDragging: false,
      oldX: 0,
      positionX: 0,
      currentIndex: -1
    };
  },
  methods: {
    calcDisp(item, index) {
      if (!item.enable || index === 0) {
        return false;
      }
      for (let i = 0; i < index; i++) {
        if (this.items[i].enable) {
          return true;
        }
      }
      return false;
    },
    calcBgWidth(index) {
      if (this.currentIndex !== -1) {
        let changeVal = ((this.positionX - this.oldX) * 100) / this.width;
        if (index === this.currentIndex - 1) {
          return (
            (this.items[index].value / (this.end - this.start)) * 100 +
            changeVal
          );
        } else if (index === this.currentIndex) {
          return (
            (this.items[index].value / (this.end - this.start)) * 100 -
            changeVal
          );
        }
      }

      return (this.items[index].value / (this.end - this.start)) * 100;
    },
    calcLeft(index) {
      let left = 0;
      for (let i = 0; i < index; i++) {
        left += (this.items[i].value / (this.end - this.start)) * 100;
      }
      if (this.currentIndex === index) {
        let changeVal = ((this.positionX - this.oldX) * 100) / this.width;
        return (left += changeVal);
      }

      return left;
    },
    getBtnTip(index) {
      let value = 0;
      if (index < 2) {
        value = this.items[index - 1].value;
      } else {
        for (let i = 1; i <= index; i++) {
          value += this.items[i - 1].value;
        }
      }
      if (this.currentIndex === index) {
        let changeVal =
          ((this.positionX - this.oldX) * (this.end - this.start)) / this.width;
        changeVal = Math.round(changeVal);
        return value + this.start + changeVal;
      }
      return value + this.start;
    },
    onDragStart(event, index) {
      this.positionX = event.clientX;
      this.isDragging = true;
      this.currentIndex = index;
      this.oldX = event.clientX;
      window.addEventListener("mousemove", this.onDragging);
      window.addEventListener("mouseup", this.onDragEnd);
    },
    onDragging(event) {
      if (this.isDragging) {
        this.positionX = event.clientX;
      }
    },
    onDragEnd() {
      window.removeEventListener("mousemove", this.onDragging);
      window.removeEventListener("mouseup", this.onDragEnd);

      let changeVal =
        ((this.positionX - this.oldX) * (this.end - this.start)) / this.width;
      changeVal = Math.round(changeVal);
      if (
        (changeVal > 0 && changeVal < this.items[this.currentIndex].value) ||
        (changeVal < 0 && -changeVal < this.items[this.currentIndex - 1].value)
      ) {
        this.items[this.currentIndex - 1].value += changeVal;
        this.items[this.currentIndex].value -= changeVal;
      }

      this.isDragging = false;
      this.currentIndex = -1;
      this.oldX = 0;
      this.positionX = 0;
    }
  }
};
</script>

<style lang="less">
.slider {
  &::before {
    content: "";
    display: table;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  &__runway {
    width: 100%;
    height: 6px;
    margin: 16px 0;
    background-color: #e4e7ed;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
  }
  &__bar {
    height: 6px;
    background-color: #409eff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    position: absolute;
  }
  &__button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    height: 36px;
    width: 36px;
    z-index: 1001;
    position: absolute;
    top: -15px;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  &__button {
    width: 16px;
    height: 16px;
    border: 2px solid #409eff;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &__button-wrapper-start {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    height: 36px;
    width: 36px;
    z-index: 1001;
    position: absolute;
    top: -15px;
    left: 0;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  &__button-start {
    width: 12px;
    height: 12px;
    border: 2px solid #c5c5c5;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &__button-wrapper-end {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    height: 36px;
    width: 36px;
    z-index: 1001;
    position: absolute;
    top: -15px;
    left: 100%;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  &__button-end {
    width: 12px;
    height: 12px;
    border: 2px solid #c5c5c5;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
