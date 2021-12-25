<template>
  <div>
    <comp-header>
      <div class="imgBox"><img src="../assets/logotext.png" alt="" /></div>
    </comp-header>
    <router-view></router-view>
    <comp-nav></comp-nav>
  </div>
</template>

<script>
import CompHeader from "@/components/comp-header.vue";
import CompNav from "@/components/comp-nav.vue";

export default {
  components: {
    CompHeader,
    CompNav,
  },
};
</script>

<style lang='scss' scoped>
.imgBox {
  width: 100px;
  img {
    width: 100%;
    vertical-align: text-bottom;
  }
}
</style>