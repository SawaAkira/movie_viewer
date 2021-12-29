<template>
  <router-link :to="'/movieinfo/' + citem.id + '/'" class="movieItem">
    <div class="imgBox">
      <img :src="citem.img" alt="" />
    </div>
    <div class="info">
      <div class="mname">
        <span>{{ citem.nm }}</span
        ><span :class="citem.version" v-if="citem.version"></span>
      </div>
      <div class="score" v-html="citem.score"></div>
      <div class="actor">主演:{{ citem.star }}</div>
      <div class="show">{{ citem.showInfo }}</div>
    </div>
    <div
      class="btn"
      @click.prevent="btnClick(citem)"
      :style="{ backgroundColor: citem.color }"
    >
      {{ citem.btn }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["citem"],
  methods: {
    btnClick(obj) {
      if (obj.link == "movieinfo") {
        this.$router.push({
          name: "MovieInfoIds",
          params: {
            id: obj.id,
          },
        });
      } else {
        this.$router.push({
          name: "MovieSalesIds",
          params: {
            id: obj.id,
          },
        });
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/common/variable.scss";
.movieItem {
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid $borderColor;
  box-sizing: border-box;
}

.imgBox {
  width: 64px;
  height: 90px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}

.info {
  flex: 1;
  > div:not(:nth-child(1)) {
    font-size: 14px;
    color: $color2;
    margin-top: 3px;
  }

  > div {
    max-width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.mname {
  font-weight: bold;
  font-size: 18px;
  color: #000;
  display: flex;
  align-items: center;

  span:nth-child(1) {
    display: inline-block;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span:nth-child(2) {
    margin-left: 3px;
    display: inline-block;
    width: 43px;
    height: 14px;
  }
}

.score /deep/ {
  span {
    color: $color4;
    font-weight: bold;
    padding: 0 3px;
  }
}

.btn {
  width: 54px;
  height: 27px;
  line-height: 27px;

  background-color: $color2;
  text-align: center;
  border-radius: calc(27px / 2);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.v2dimax {
  background: url(../assets/v2dimax.png) no-repeat 0 0 / cover;
}

.v3dimax {
  background: url(../assets/v3dimax.png) no-repeat 0 0 / cover;
}
</style>