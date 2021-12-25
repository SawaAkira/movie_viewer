<template>
  <div class="searchPage">
    <comp-header>
      <div class="imgBox"><img src="../assets/logotext.png" alt="" /></div>
    </comp-header>
    <comp-search @input-data="getInputData"></comp-search>
    <div class="searchResult">
      <div class="searchTip" v-if="isLoading"><span> 加载中...</span></div>
      <div class="searchMovie" v-if="isMovie">
        <div class="searchTitle">电影/电视剧/综艺</div>
        <comp-searchmovie
          v-for="item in movieList"
          :key="item.id"
          :citem="item"
        ></comp-searchmovie>
        <div class="searchMore">{{"查看全部"+ totalMovies +"部影视剧"}}</div>
      </div>
      <div class="searchCinema" v-if="isCinema">
          <div class="searchTitle">影院</div>
          <comp-searchcinema
          v-for="item in cinemaList"
          :key="item.id"
          :citem="item"
        ></comp-searchcinema>
          <div class="searchMore">{{"查看全部"+ totalCinemas +"家电影院"}}</div>
      </div>
      <div class="searchTip" v-if="isTip"><span>没有找到相关内容</span></div>
    </div>
  </div>
</template>

<script>
import CompHeader from "@/components/comp-header.vue";
import CompSearch from "@/components/comp-search.vue";
import CompSearchmovie from "@/components/comp-searchmovie.vue";
import CompSearchcinema from "@/components/comp-searchcinema.vue";

export default {
  data() {
    return {
      localCityId: 1,
      movieList: [],
      totalMovies: 0,
      cinemaList: [],
      totalCinemas: 0,

      isMovie: false,
      isCinema: false,
      isTip:false,
      isLoading: false,
    };
  },
  components: {
    CompHeader,
    CompSearch,
    CompSearchmovie,
    CompSearchcinema,
  },
  created() {
    if(localStorage.getItem("localCity")){
      this.localCityId = JSON.parse(localStorage.getItem("localCity")).id;
    } else {
      this.localCityId = this.localCityId;
    }
  },
  methods: {
    getInputData(keyword) {
      if (keyword && keyword.replaceAll(" ","")) {
          this.isLoading = true;
          axios.get("/search/suggest", {
            params: { cityId: this.localCityId, kw: keyword },
          }).then((data) => {
            if (data.status == 200) {
              this.isLoading = false;
              if (!data.data.movies && !data.data.cinemas) {
                this.isMovie = false;
                this.isCinema = false;
                this.isTip = true;
              } else if (!data.data.cinemas) {
                this.movieList = data.data.movies.list;
                this.totalMovies = data.data.movies.total;
                this.isCinema = false;
                this.isMovie = true;
                this.isTip = false;
              } else if (!data.data.movies) {
                this.cinemaList = this.dataProcessing(data.data.cinemas.list);
                this.totalCinemas = data.data.cinemas.total;
                this.isMovie = false;
                this.isCinema = true;
                this.isTip = false;
              } else {
                this.movieList = data.data.movies.list;
                this.totalMovies = data.data.movies.total;
                this.cinemaList = this.dataProcessing(data.data.cinemas.list);
                this.totalCinemas = data.data.cinemas.total;
                this.isCinema = true;
                this.isMovie = true;
                this.isTip = false;
              }
            }
          });
      } else {
          this.isCinema = false;
          this.isMovie = false;
          this.isTip = false;
      }
    },
    dataProcessing(data){
        let arr = [];
        data.forEach(item => {
            let obj = {};
            obj.nm = item.nm;
            obj.addr = item.addr;
            obj.sellPrice = item.sellPrice;
            obj.tab = [];
            if(item.sell){
                obj.tab.push({text:"座", code:"sell"});
            };
            if(item.hallType){
                item.hallType.forEach( n =>{
                    obj.tab.push({text: n, code:"hallType"});
                });
            };
            if(item.endorse){
                obj.tab.push({text:"改签", code:"endorse"});
            };
            if(item.allowRefund){
                obj.tab.push({text:"退", code:"allowRefund"});
            };
            if(item.snack){
                obj.tab.push({text:"小吃", code:"snack"});
            }
            arr.push(obj);
        });
        return arr
    }
  },
};
</script>

<style lang='scss' scoped>
@import '../assets/common/variable.scss';
.searchPage {
  height: 100vh;
  background-color: #f5f5f5;
}
.imgBox {
  width: 100px;
  img {
    width: 100%;
    vertical-align: text-bottom;
  }
}
.searchResult{
    position: relative;
    height: calc(100vh - 60px - 53px);

    .searchTitle{
        font-size: 16px;
        color: #999;
        padding: 10px 15px;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid $borderColor;
    }

    .searchMore{
        text-align: center;
        font-size: 16px;
        color: $color;
        padding: 10px 15px;
        background-color: #fff;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
}
.searchTip{
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    
    span{
        display: block;
        margin: 0 auto;
        padding: 10px 30px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        box-sizing: border-box;
        text-align: center;
    }
}
</style>
