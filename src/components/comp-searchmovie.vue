<template>
  <router-link class="movieItem" :to="'/movieinfo/' + citem.id + '/'">
    <div class="imgBox">
      <img :src="citem.img" alt="" />
    </div>
    <div class="info">
      <div class="title">{{citem.nm}}</div>
      <div class="e_title">{{citem.enm}}</div>
      <div class="tip">{{citem.cat}}</div>
      <div class="time">{{citem.rt}}</div>
    </div>
    <div class="score" v-html="score"></div>
  </router-link>
</template>

<script>
export default {
    data(){
        return{
            score: 0,
        }
    },
    created(){
        this.score = this.citem.sc;
        this.score = this.score == 0 ? "暂无评分" : "<span>"+ this.score +"</span> 分";
    },
    props:['citem'],
}
</script>


<style lang="scss" scoped>
@import '../assets/common/variable.scss';
.movieItem {
  padding: 10px 15px;
  display: flex;
  background-color: #FFF;
  box-sizing: border-box;
  border-bottom: 1px solid $borderColor;
}

.imgBox {
  width: 66px;
  height: 94px;

  img {
    width: 100%;
    height: 100%;
  }
}

.info {
  margin-left: 10px;
  flex: 1;
  overflow: hidden;

  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 3px;
  }

  div:not(:first-child) {
    color: #666;
    font-size: 13px;
    margin-top: 5px;
  }
}

.score /deep/{
  width: 60px;
  font-size: 12px;
  text-align: right;
  color: #999;
  span{
      color: $color4;
      font-size: 14px;
  }
}
</style>