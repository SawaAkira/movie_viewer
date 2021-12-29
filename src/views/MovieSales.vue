<template>
  <div class="moviesales" ref="moviesales">
    <comp-header>
      <div class="imgBox"><img src="../assets/logotext.png" alt="" /></div>
    </comp-header>
    <comp-moviesalescard :citem="movieInfo" v-if="isShow"></comp-moviesalescard>
    <div class="navBox" v-if="isShow">
      <ul class="dateList">
        <li
          v-for="(item, index) in dateList"
          :key="index"
          @click="dateIndex = index"
          :class="{ active: dateIndex == index }"
        >
          {{ item.date.slice(5).replace("-", "月") + "日" }}
        </li>
      </ul>
      <comp-salesnav
        :cid="localCityId"
        :mid="movieId"
        :date="day"
        @get-data="getChildData"
        v-if="!isHasTime"
      ></comp-salesnav>
    </div>
    <div class="cinemaList">
      <template v-for="item in cinemaList">
        <comp-cinemasalescard
          :key="item.id"
          :citem="item"
          v-if="!isLoadingShow"
          @click.native="toCinemaPage(item.id)"
        ></comp-cinemasalescard>
      </template>
      <div class="more" v-if="isMore">
        <comp-loadinganimate v-if="moreTip" :wah="50"></comp-loadinganimate>
        <span v-if="!moreTip">没有更多了/(ㄒoㄒ)/~~</span>
      </div>
    </div>
    <div class="loadingBox" v-if="isHasTime">
        <h3>当前城市无排片信息</h3>
    </div>
    <div class="loadingBox" v-if="isLoadingShow">
      <comp-loadinganimate :wah="80"></comp-loadinganimate>
    </div>
  </div>
</template>

<script>
import CompHeader from "@/components/comp-header.vue";
import CompMoviesalescard from "@/components/comp-moviesalescard.vue";
import CompCinemasalescard from "@/components/comp-cinemasalescard.vue";
import CompLoadinganimate from "@/components/comp-loadinganimate.vue";
import CompSalesnav from "@/components/comp-salesnav.vue";
export default {
  data() {
    return {
      isShow: false,
      isLoadingShow: true,
      moreTip: true,
      isMore: false,
      isHasTime: false,
      movieId: "",
      movieInfo: {},
      localCityId: 1,
      dateList: [],
      dateIndex: 0,
      cinemaList: [],

      day: "",
      limit: 10,
      offset: 0,
      districtId: -1,
      lineId: -1,
      areaId: -1,
      stationId: -1,
      brandIds: -1,
      serviceIds: -1,
      hallTypeIds: "all",
      languageIds: "all",
      dimIds: "all",
    };
  },
  components: {
    CompHeader,
    CompMoviesalescard,
    CompCinemasalescard,
    CompLoadinganimate,
    CompSalesnav,
  },
  created() {
    this.movieId = this.$route.params.id;
    if (localStorage.getItem("localCity")) {
      this.localCityId = JSON.parse(localStorage.getItem("localCity")).id;
    } else {
      this.localCityId = this.localCityId;
    }
    this.getMovieInfo();
    this.getMovieTime();
  },
  methods: {
    getMovieInfo() {
      axios
        .get("/movie/intro", { params: { movieid: this.movieId } })
        .then((data) => {
          if (data.status == 200) {
            this.isShow = true;
            this.dataProcessing(data.data.data.movie);
            document.title = data.data.data.movie.nm;
          }
        });
    },
    getMovieTime() {
      axios
        .get("/movie/showdays", {
          params: { movieId: this.movieId, cityId: this.localCityId },
        })
        .then((data) => {
          if (data.status == 200) {
            if(data.data.code != 109){
              this.dateList = data.data.data.dates;
              this.day = this.dateList[this.dateIndex].date;
              this.getCinemaData();
            } else {
              this.isLoadingShow = false;
              this.isHasTime = true;
            }
          }
        });
    },
    dataProcessing(item) {
      let obj = {};
      obj.id = item.id;
      obj.img = item.img.replace("w.h", "110.150");
      obj.nm = item.nm;
      obj.enm = item.enm;
      obj.cat = item.cat;
      obj.src = item.src;
      obj.dur = item.dur;
      obj.pubDesc = item.pubDesc;
      if (item.sc) {
        obj.sc = item.sc.toFixed(1);
        obj.snum = item.snum;
      } else {
        obj.wish = item.wish;
      }
      this.movieInfo = obj;
    },
    getCinemaData() {
      this.isLoadingShow = true;
      this.isMore = false;
      this.moreTip = true;
      axios
        .get("/movie/select/cinemas", {
          params: {
            limit: this.limit,
            offset: this.offset,
            showDate: this.day,
            movieId: this.movieId,
            sort: "distance",
            cityId: this.localCityId,
            districtId: this.districtId,
            lineId: this.lineId,
            areaId: this.areaId,
            stationId: this.stationId,
            brandIds: "[" + this.brandIds + "]",
            serviceIds: "[" + this.serviceIds + "]",
            hallTypeIds: '["' + this.hallTypeIds + '"]',
            languageIds: '["' + this.languageIds + '"]',
            dimIds: '["' + this.dimIds + '"]',
          },
        })
        .then((data) => {
          if (data.status == 200) {
            this.isLoadingShow = false;
            this.cinemaList = data.data.data.cinemas;
            if(data.data.data.cinemas.length < this.limit){
              this.moreTip = false;
            } 
            this.isMore = true;
          }
        });
    },
    getMoreCinema() {
      axios
        .get("/movie/select/cinemas", {
          params: {
            limit: this.limit,
            offset: this.offset,
            showDate: this.day,
            movieId: this.movieId,
            sort: "distance",
            cityId: this.localCityId,
            districtId: this.districtId,
            lineId: this.lineId,
            areaId: this.areaId,
            stationId: this.stationId,
            brandIds: "[" + this.brandIds + "]",
            serviceIds: "[" + this.serviceIds + "]",
            hallTypeIds: '["' + this.hallTypeIds + '"]',
            languageIds: '["' + this.languageIds + '"]',
            dimIds: '["' + this.dimIds + '"]',
          },
        })
        .then((data) => {
          if (data.status == 200) {
            this.cinemaList = [...this.cinemaList,...data.data.data.cinemas];
            if(data.data.data.cinemas.length < this.limit){
              this.moreTip = false;
            }
          }
        });
    },
    getChildData(obj) {
      this.districtId = obj.districtId;
      this.lineId = obj.lineId;
      this.areaId = obj.areaId;
      this.stationId = obj.stationId;
      this.brandIds = obj.brandIds;
      this.serviceIds = obj.serviceIds;
      this.hallTypeIds = obj.hallTypeIds;
      this.languageIds = obj.languageIds;
      this.dimIds = obj.dimIds;
      this.getCinemaData();
    },
    // 拉到底部监听
    handleScroll() {
      this.$nextTick(() => {
        if (this.$refs.moviesales) {
          let ch = this.$refs.moviesales.clientHeight;
          let st = this.$refs.moviesales.scrollTop;
          let sh = this.$refs.moviesales.scrollHeight;
          let d = setTimeout(() => {
            if (ch + st == sh) {
              if (this.cinemaList.length % this.limit == 0) {
                this.offset += this.limit;
                this.getMoreCinema();
              }
            }
          }, 300);
        }
      });
    },
    toCinemaPage(cinemaId){
      this.$router.push({path:'/cinema', query: {cinemaId,movieId:this.movieId,date:this.day,}})
    }
  },
  watch: {
    dateIndex(val) {
      this.day = this.dateList[val].date;
      this.getCinemaData();
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import "../assets/common/variable.scss";
.moviesales {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  .imgBox {
    width: 100px;
    img {
      width: 100%;
      vertical-align: text-bottom;
    }
  }
}

.dateList {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid $borderColor;
  overflow-x: scroll;
  background-color: #fff;

  li {
    flex: none;
    width: 115px;
    line-height: 43px;
    margin-left: 4.5px;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
  }

  .active {
    border-bottom: 2.5px solid $color;
  }
}

.navBox {
  position: sticky;
  left: 0;
  top: 0;
}

.cinemaList {
  .more {
    display: flex;
    padding: 10px 0;
    span {
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      width: 100%;
      text-align: center;
    }
  }
}

.loadingBox {
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(50% - 80px / 2);
  h3{
    text-align: center;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
