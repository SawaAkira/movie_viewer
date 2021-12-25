<template>
  <div class="movieHeader" v-if="isShow">
    <div class="imgBox">
      <img :src="img" alt=""/>
    </div>
    <div class="movieMsg">
      <h3 class="title">{{mdata.nm}}</h3>
      <span class="e_name">{{mdata.enm}}</span>
      <span class="cat">{{cat}}</span>
      <span class="star">{{star}}</span>
      <span class="data">{{mdata.onlineDate}} / {{mdata.dur + "分钟"}}</span>
      <div class="statusBtn">
        <div class="wish"><i class="bi bi-suit-heart-fill"></i>想看</div>
        <div class="watched"><i class="bi bi-star-fill"></i>看过</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            img: "",
            cat: "",
            star: "",
            isShow: false,
        }
    },
    props: ['mdata'],
    watch: {
        mdata(data){
            this.isShow =true;
            this.img = data.img.replace('w.h','100.138');
            this.cat = data.cat.replaceAll(","," / ");
            this.star = data.star.replaceAll(","," / ");
        }
    }
}
</script>

<style lang="scss" scoped>
.movieHeader {
  display: flex;
  width: 100%;

  .imgBox {
    width: 100px;
    height: 138px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.movieMsg {
  margin-left: 10px;
  flex: 1;
  max-width: calc(375px - 146px);
  white-space: nowrap;
  
  .title {
    font-size: 20px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 7px;
    
  }

  > span {
    display: block;
    font-size: 12px;
    letter-spacing: -0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 2px;
    color: #bbb;
  }

  .statusBtn{
    display: flex;
    justify-content: space-between;
  }

  .wish,
  .watched{
    flex: 1;
    text-align: center;
    font-size: 13px;
    padding: 6px 20px;
    box-sizing: border-box;
    color: #eee;
    background-color: rgba($color: #FFFFFF, $alpha: 0.35);
    border-radius: 5px;
    margin-top: 5px;

    i{
      font-size: 12px;
      margin-right: 5px;
    }
  }
  .wish{
      margin-right: 10px;
  }
}
</style>