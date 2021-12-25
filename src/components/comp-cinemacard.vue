<template>
  <div class="ci_item">
    <div class="ci_title">
      <h3 class="ci_name">{{ citem.title }}</h3>
      <span><span>{{ citem.price.n }}</span>{{ " " + citem.price.q }}</span>
    </div>
    <div class="ci_info">
      <p class="ci_address">{{ citem.location }}</p>
      <span class="ci_distance">{{ citem.distance }}</span>
    </div>
    <div class="ci_tab" v-if="citem.services.length">
      <i
        v-for="(item, index) in citem.services"
        :key="index"
        :class="item.code"
        >{{ item.text }}</i
      >
    </div>
    <div class="ci_tip" v-if="citem.discount.length">
      {{ citem.discount[0].text }}
    </div>
  </div>
</template>

<script>
export default {
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

  .ci_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    margin-top: 5px;
  }

  .ci_address {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ci_distance {
    font-size: 13px;
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

  .ci_tip {
    font-size: 12px;
    color: #999;
    margin-top: 8px;
  }

  .endorse,
  .allowRefund,
  .hallType {
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