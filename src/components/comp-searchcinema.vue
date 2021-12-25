<template>
  <div class="ci_item">
    <div class="ci_title">
      <h3 class="ci_name">{{ citem.nm }}</h3>
      <span><span>{{ citem.sellPrice }}</span> 元起</span>
    </div>
    <div class="ci_address">{{ citem.addr }}</div>
    <div class="ci_tab" v-if="isTabShow">
      <i
        v-for="(item, index) in citem.tab"
        :key="index"
        :class="item.code"
        >{{ item.text }}</i
      >
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isTabShow: true,
        }
    },
    props: ["citem"],
};
</script>


<style lang="scss">
@import "../assets/common/variable.scss";
.ci_item {
  background-color: #fff;
  padding: 15px;
  border-bottom: 1px solid $borderColor;

  .ci_title{
    display: flex;
    align-items: center;
  }

  .ci_name {
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
    max-width: 280px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ci_name + span {
    font-size: 12px;
    color: $color4;
    margin-left: 5px;
    width: 70px;

    span {
      font-size: 18px;
    }
  }

  .ci_address {
    color: #666;
    margin-top: 5px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ci_tab {
    display: flex;
    flex-wrap: wrap;

    i {
      font-size: 12px;
      font-style: normal;
      border-radius: 2px;
      padding: 0 2px;
      margin: 5px 5px 0 0;
    }
  }

  .endorse,
  .allowRefund,
  .hallType,
  .sell {
    color: $color;
    border: 1px solid $color;
  }

  .vipTag,
  .snack {
    color: $color4;
    border: 1px solid $color4;
  }
}
</style>