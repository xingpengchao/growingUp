<template>
  <div class="home">
    <el-carousel
      :interval="4000"
      type="card"
      height="230px"
      :class="_elCarousel"
    >
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <a :href="item.href">
          <img :src="item.src" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
    <Card
      v-for="(item, index) in list"
      :key="index"
      :src="item.src"
      :title="item.title"
      :name="item.name"
      :href="item.href"
      :value="item.value"
      :class="_class"
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import imgURLS from "@/utils/img.js";

const baseURL = "https://cn.ad101.vip";
const name = "home";
export default {
  name,
  components: {
    Card
  },
  data() {
    return {
      imgList: [
        {
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=bgBVdpPgZ2G`
        },
        {
          src: imgURLS.imgURL2,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`
        },
        {
          src: imgURLS.imgURL3,
          href: `${baseURL}/watch?v=M7nXqaQ0XK1`
        },
        {
          src: imgURLS.imgURL4,
          href: `${baseURL}/watch?v=V0LBOnj4XoN`
        }
      ],
      list: [
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=bgBVdpPgZ2G`,
          value: 3.7
        },
        {
          title: "神乳絕倫性交．安齋拉拉",
          name: "宇都宮紫苑、安齋拉拉",
          src: imgURLS.imgURL2,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "近所のお姉さん達が階段で超",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL3,
          href: `${baseURL}/watch?v=M7nXqaQ0XK1`,
          value: 3.7
        },
        {
          title: "Hなイタズラ デカ尻若妻3人大集合",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL4,
          href: `${baseURL}/watch?v=V0LBOnj4XoN`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        },
        {
          title: "初戀與現任女友在我眼前遭侵犯",
          name: "逢見梨花，優梨舞奈",
          src: imgURLS.imgURL1,
          href: `${baseURL}/watch?v=VMP8nG35ZyD`,
          value: 3.7
        }
      ]
    };
  },
  computed: {
    _class() {
      return [`${name}-card`]
    },
    _elCarousel() {
      return [`${name}-carousel`]
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  overflow: auto;
  background-color: #333333;
  &-card {
    float: left;
  }
  &-carousel {
    a > img {
      height: 230px;
    }
  }
}
</style>
