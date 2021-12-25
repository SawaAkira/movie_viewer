<template>
  <router-link class="classicItem" :to="'/movieinfo/' + citem.movieId + '/'">
    <div class="imgBox">
      <img :src="citem.poster" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ citem.movieInfo.title }}</div>
      <div class="e_title">{{ citem.movieInfo.englishTitle }}</div>
      <div class="tip">{{ citem.movieInfo.actors }}</div>
      <div class="time">{{ citem.movieInfo.showInfo }}</div>
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
        this.score = this.citem.score;
        this.score = this.score == "" ? "暂无评分" : "<span>"+ this.score +"</span> 分";
    },
    props:['citem'],
}
</script>


<style lang="scss" scoped>
@import '../assets/common/variable.scss';
.classicItem {
  padding: 10px 0 10px 20px;
  display: flex;
  background-color: #FFF;
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
  text-align: center;
  color: #999;
  span{
      color: $color4;
      font-size: 14px;
  }
}
</style>