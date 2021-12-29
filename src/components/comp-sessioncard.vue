<template>
  <div class="sessioncard">
    <div class="stime">
      <h3>{{ citem.tm }}</h3>
      <span>{{ getEndTime(citem.tm, clong) + '散场' }}</span>
    </div>
    <div class="smsg">
      <span>{{ citem.lang }}{{ " " + citem.tp }}</span>
      <p>{{ citem.th }}</p>
    </div>
    <div class="sprice">
      <span>{{ "￥" + citem.baseSellPrice }}</span>
    </div>
    <div class="sbtn"><span>购票</span></div>
  </div>
</template>

<script>
export default {
  props: ["citem", "clong"],
  methods: {
    getEndTime(now, long) {
      let n = now.split(":")[0] * 60 + now.split(":")[1] * 1;
      let sum = n + long;
      let h = parseInt(sum / 60);
      let m = sum % 60;
      if (m < 10) {
        m = "0" + m;
      } else if (m == 0){
          m = "00";
      }
      let t = "";
      if (h >= 24) {
        t = "0" + (h - 24) + ":" + m;
      } else {
        t = h + ":" + m;
      }
      return t
    },
  },
};
</script>



<style lang="scss">
@import "../assets/common/variable.scss";
.sessioncard {
  display: flex;
  font-size: 16px;
  padding: 17px 12.5px;
  box-sizing: border-box;
  border-bottom: 1px solid $borderColor;

  .stime {
      flex: none;
    h3 {
      font-size: 20px;
      font-weight: normal;
    }

    span {
      font-size: 12px;
      margin-top: 10px;
      color: #999;
      display: block;
    }
  }

  .smsg {
    margin-left: 17px;
    flex: 1;

    span {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      padding-top: 12px;
      color: #999;
    }
  }

  .sprice {
    width: 130px;
    flex: none;
    position: relative;

    span {
      font-size: 22px;
      color: $color4;
      position: absolute;
      right: 15px;
      top: calc(50% - 29px / 2);
    }
  }

  .sbtn {
    width: 45px;
    flex: none;
    position: relative;

    span {
      font-size: 12px;
      color: $color;
      border: 1px solid $color;
      padding: 5px 8px;
      border-radius: 13px;
      position: absolute;
      left: 0;
      top: calc(50% - 28px / 2);
    }
  }
}
</style>