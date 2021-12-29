<template>
  <lottie
    :options="defaultOptions"
    :height="wah"
    :width="wah"
    v-on:animCreated="handleAnimation"
  />
</template>

<script>
import * as animationData from "@/assets/lottie/loading.json";
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      // animationSpeed: 1,
      // anim: {}
    };
  },
  props: ['wah'],
  methods:{
      // 加载动画
    handleAnimation(anim) {
        this.anim = anim;
    },
  }
};
</script>
