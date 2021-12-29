<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide @click="clickSwiper" v-for="item in cmovie" :key="item.id"
      ><img :src="item.img.replace('w.h', '78.109')" alt=""
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
let vm = null;
export default {
  name: "swiper-example-centered-slides",
  title: "Centered slides",
  props: ["cmovie", "cindex"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      that: this,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 15,
        centeredSlides: true,
        slideToClickedSlide: true,
        preventClicks: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChange: function () {
            vm.clickSwiper(this.activeIndex);
          },
        },
      },
    };
  },
  methods: {
    clickSwiper(i) {
      this.$emit("swiper-click", i);
    },
  },
  created() {
    vm = this;
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  padding: 20px 15px 20px 5px;
  background-image: radial-gradient(
    circle,
    #7e7e7e,
    #6b6b6b,
    #595858,
    #474646,
    #363535
  );
}
.swiper-slide {
  height: 110px;
  img {
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }
}
.swiper-slide-active {
  border: 3px solid #fff;
  transform: scale(1.15);
}
</style>