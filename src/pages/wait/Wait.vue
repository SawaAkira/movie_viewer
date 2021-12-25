<template>
  <div class="wait" ref="wait">
    <section class="expect">
      <p class="title">{{ expectTitle }}</p>
      <div class="cardBox" ref="expect">
        <router-link
          :to="'/movieinfo/' + item.id + '/'"
          class="card"
          v-for="item in expectMovieList"
          :key="item.id"
        >
          <div class="imgBox">
            <img :src="item.img.replace('w.h', '128.180')" alt="" />
            <div class="score">
              <span>{{ item.wish }}人想看</span>
            </div>
          </div>
          <div class="pname">{{ item.nm }}</div>
          <div class="time">{{ item.comingTitle.split(" ")[0] }}</div>
        </router-link>
        <span v-if="tipShow" v-html="moreExpectTip"></span>
      </div>
    </section>
    <section class="movieList">
      <div v-for="(date, index) in movieArr" :key="index">
        <div class="date">{{ date }} 上映</div>
        <comp-moviecard
          v-for="item in movieObj[date]"
          :key="item.id"
          :citem="item"
        ></comp-moviecard>
      </div>
      <div class="more">{{ moreTip }}</div>
    </section>
  </div>
</template>

<script>
import CompMoviecard from "@/components/comp-moviecard.vue";
export default {
  data() {
    return {
      expectTitle: "",
      expectMovieList: [],
      limit: 10,
      offset: 0,
      moreExpectTip: "加<br/>载<br/>中",
      tipShow: false,
      movieList: [],
      movieObj: {},
      movieArr: [],
      moreTip: "加载中...",
      localCityId: 1,
      isMoreExpect: true,
      isMore:true,
    };
  },
  components: {
    CompMoviecard,
  },
  methods: {
    // 获取近期最受期待数据
    getExpectMovie() {
      axios
        .get("/index/mostExpected", {
          params: {
            ci: this.localCityId,
            limit: this.limit,
            offset: this.offset,
          },
        })
        .then((data) => {
          if (data.status == 200) {
            this.expectMovieList = data.data.coming;
            this.expectTitle = "近期最受期待";
          }
        });
    },
    // 获取更多近期最受期待数据
    getMoreExpect() {
      if (this.isMoreExpect) {
        this.isMoreExpect = false;
        axios
          .get("/index/mostExpected", {
            params: {
              ci: this.localCityId,
              limit: this.limit,
              offset: this.offset,
            },
          })
          .then((data) => {
            if (data.status == 200) {
              this.isMoreExpect = true;
              this.expectMovieList = [
                ...this.expectMovieList,
                ...data.data.coming,
              ];
            }
          });
      }
    },
    // 获取待映列表
    getExpectList() {
      axios
        .get("/index/comingList", {
          params: { ci: this.localCityId, limit: this.limit },
        })
        .then((data) => {
          if (data.status == 200) {
            let list = data.data.coming;
            let ids = data.data.movieIds;
            this.moreList = ids.splice(list.length, ids.length + 1);
            this.dataProcessing(list);
          }
        });
    },
    // 获取更多待映列表
    getMoreList(arr) {
      if (this.isMore) {
        this.isMore = false;
        let str = arr.join(",");
        axios
          .get("/index/moreComingList", { params: { movieIds: str, ci: this.localCityId } })
          .then((data) => {
            if (data.status == 200) {
              this.isMore = true;
              this.dataProcessing(data.data.coming);
            }
          });
      }
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
        obj.version = item.version.replace(" ", "");
        obj.rt = item.rt;
        if (item.showStateButton) {
          obj.btn = item.showStateButton.content;
          if (item.showStateButton.content == "预售") {
            obj.score = "<span>" + item.wish + "</span>人想看";
            obj.color = "#FAAF00";
          } else if (item.showStateButton.content == "点映") {
            obj.score = "<span>" + item.wish + "</span>人想看";
            obj.color = "#3C9FE6";
          }
        } else {
          obj.btn = "想看";
          obj.score = "<span>" + item.wish + "</span>人想看";
          obj.color = "#FF80B0";
          obj.showInfo = item.rt + " 上映";
        }
        if (!this.movieObj[obj.rt]) {
          this.movieObj[obj.rt] = [];
          this.movieArr.push(obj.rt);
        }

        if (obj.rt == item.rt) {
          this.movieObj[obj.rt].push(obj);
        }
      });
    },
    // 拉到底部监听
    handleScroll() {
      this.$nextTick(() => {
        this.tipShow = true;
        if (this.$refs.expect) {
          let cw = this.$refs.expect.clientWidth;
          let sl = this.$refs.expect.scrollLeft;
          let sw = this.$refs.expect.scrollWidth;
          setTimeout(() => {
            if (cw + sl == sw) {
              if (!(this.expectMovieList.length % this.limit)) {
                this.offset += 10;
                this.getMoreExpect();
              } else {
                this.moreExpectTip = "没<br/>有<br/>更<br/>多<br/>了";
              }
            }
          }, 300);
        }
        if (this.$refs.wait) {
          let ch = this.$refs.wait.clientHeight;
          let st = this.$refs.wait.scrollTop;
          let sh = this.$refs.wait.scrollHeight;
          setTimeout(() => {
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
    this.getExpectMovie();
    this.getExpectList();
    if(localStorage.getItem("localCity")){
      this.localCityId = JSON.parse(localStorage.getItem("localCity")).id;
    } else {
      this.localCityId = this.localCityId;
    }
    
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
.wait {
  background-color: $borderColor;
  overflow-y: scroll;
  height: 100%;
}
.expect {
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
    align-items: center;
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

  .time {
    font-size: 12px;
    color: $color2;
    letter-spacing: -0.5px;
  }

  .cardBox > span /deep/ {
    font-size: 12px;
    display: block;
  }
}
.movieList {
  background-color: #fff;

  .date {
    padding: 15px 15px 0;
    font-size: 14px;
  }

  .more {
    text-align: center;
    padding: 10px 0;
  }
}
</style>