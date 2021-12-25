<template>
  <div class="hot" ref="hot">
    <section class="praise">
      <p class="title">{{ praiseTitle }}</p>
      <div class="cardBox">
        <router-link
          :to="'/movieinfo/' + item.movieId + '/'"
          class="card"
          v-for="item in praiseMovieList"
          :key="item.movieId"
        >
          <div class="imgBox">
            <img :src="item.poster" alt="" />
            <div class="score">
              <span v-html="scoreProcessing(item.score)"></span>
            </div>
          </div>
          <div class="pname">{{ item.name }}</div>
        </router-link>
      </div>
    </section>
    <section class="movieList">
      <comp-moviecard v-for="item in movieList" :key="item.id" :citem="item"></comp-moviecard>
      <div class="more">{{ moreTip }}</div>
    </section>
  </div>
</template>

<script>
import CompMoviecard from '@/components/comp-moviecard.vue'
export default {
  data() {
    return {
      praiseTitle: "",
      praiseMovieList: [],
      movieList: [],
      moreList: [],
      moreTip: "加载中...",
      isMore: true,
    };
  },
  components: {
    CompMoviecard,
  },
  methods: {
    // 获取最受好评电影数据
    getPraiseMovie() {
      axios.get("/index/topRatedMovies").then((data) => {
        if (data.status == 200) {
          this.praiseMovieList = data.data.movieList;
          this.praiseTitle = data.data.title;
        }
      });
    },
    // 获取电影列表
    getMovieList() {
      axios.get("/index/movieOnInfoList").then((data) => {
        if (data.status == 200) {
          let list = data.data.movieList;
          let ids = data.data.movieIds;
          this.moreList = ids.splice(list.length,ids.length + 1);
          this.dataProcessing(list);
        }
      });
    },
    // 获取更多电影列表
    getMoreList(arr) {
      if(this.isMore){
        this.isMore = false;
        let str = arr.join(",");
        axios.get("/index/moreComingList",{params:{movieIds:str}}).then((data) => {
          if (data.status == 200) {
            this.isMore = true;
            this.dataProcessing(data.data.coming);
          }
        });
      }
      
    },
    // 处理数据
    scoreProcessing(score){
      score = score == 0 ? "暂无评分" : "观众分&nbsp;<span>" + Number(score).toFixed(1) + "</span>";
      return score
    },
    // 处理数据
    dataProcessing(list) {
      list.forEach((item) => {
        let obj = {};
        obj.id = item.id;
        obj.img = item.img.replace("w.h", "128.180");
        obj.nm = item.nm;
        obj.showInfo = item.showInfo;
        obj.star = item.star;
        if (item.version) {
          obj.version = item.version.replace(" ", "");
        } else {
          obj.version = "";
        }
        if (item.showStateButton.content == "预售") {
          obj.score = "<span>" + item.wish + "</span>人想看";
          obj.color = "#FAAF00";
        } else if (item.showStateButton.content == "点映") {
          obj.score = "<span>" + item.wish + "</span>人想看";
          obj.color = "#3C9FE6";
        } else {
          obj.score = item.sc == 0 ? "暂无评分" : "观众评<span>" + Number(item.sc).toFixed(1) + "</span>";
          obj.color = "#48CFAE";
        }
        obj.btn = item.showStateButton.content;
        this.movieList.push(obj);
      });
    },
    // 拉到底部监听
    handleScroll() {
      this.$nextTick(() => {
        if (this.$refs.hot) {
          let ch = this.$refs.hot.clientHeight;
          let st = this.$refs.hot.scrollTop;
          let sh = this.$refs.hot.scrollHeight;
          let d = setTimeout(() => {
            if (ch + st == sh) {
              if (this.moreList.length > 0) {
                let arr = this.moreList.splice(0, 10);
                this.getMoreList(arr);
              } else {
                this.moreTip = "没有更多了/(ㄒoㄒ)/~~";
              }
            }
          }, 300);
        }
      });
    },
  },
  created() {
    this.getPraiseMovie();
    this.getMovieList();
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/common/variable.scss";
.hot {
  background-color: $borderColor;
  overflow-y: scroll;
  height: 100%;
}
.praise {
  padding: 12px 15px;
  margin-bottom: 10px;
  background-color: #fff;

  .title {
    margin-bottom: 12px;
    font-size: 14px;
  }

  .cardBox {
    display: flex;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .card {
    margin-right: 10px;
  }

  .imgBox {
    width: 85px;
    height: 115px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .score {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 35px;
    background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);

    span {
      font-size: 12px;
      font-weight: bold;
      width: 100%;
      position: absolute;
      bottom: 3px;
      left: 0;
      text-align: center;
      color: $color4;
    }
  }

  .pname {
    color: #222;
    width: 85px;
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.movieList {
  background-color: #fff;

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

  .more {
    text-align: center;
    padding: 10px 0;
  }

  .v2dimax {
    background: url(../../assets/v2dimax.png) no-repeat 0 0 / cover;
  }

  .v3dimax {
    background: url(../../assets/v3dimax.png) no-repeat 0 0 / cover;
  }
}
</style>
