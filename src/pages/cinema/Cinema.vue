<template>
  <div class="cinema" ref="cinema">
    <comp-cinemanav :cid="cityId" @get-data="getChildData"></comp-cinemanav>
    <div class="cinemaList" v-if="isShow">
      <comp-cinemacard
        v-for="item in cinemaList"
        :key="item.cinemaId"
        :citem="item"
        @click.native="toCinemaPage(item.cinemaId)"
      ></comp-cinemacard>
      <div class="more">
          <comp-loadinganimate v-if="moreTip" :wah="50"></comp-loadinganimate>
          <span v-if="!moreTip">没有更多了/(ㄒoㄒ)/~~</span>
      </div>
    </div>
    <div class="loadingBox" v-if="isLoadingShow">
        <comp-loadinganimate :wah="80"></comp-loadinganimate>
      </div>
  </div>
</template>

<script>
import CompCinemanav from "@/components/comp-cinemanav.vue";
import CompCinemacard from "@/components/comp-cinemacard.vue";
import CompLoadinganimate from '@/components/comp-loadinganimate.vue'
export default {
  data() {
    return {
      // -1表示全部
      limit: 10,
      cityId: 1,
      offset: 0,
      day: "2021-12-23", // 当天日期
      hallType: -1, // 影厅类型
      brandId: -1, // 品牌
      serviceId: -1, // 影院服务
      districtId: -1, // 行政区
      areaId: -1, // 行政区二级地区
      lineId: -1, // 地铁线路
      stationId: -1, // 地铁车站

      cinemaList: [],
      moreTip: true,
      isMore: true,
      isLoadingShow: false,
      isShow: true,
    };
  },
  components: {
    CompCinemanav,
    CompCinemacard,
    CompLoadinganimate,
  },
  methods: {
    // 获取电影院数据
    getLocalCinema() {
      this.isShow = false;
      this.isLoadingShow = true;
      axios
        .get("/index/moreCinemas", {
          params: {
            limit: this.limit,
            cityId: this.cityId,
            day: this.day,
            hallType: this.hallType,
            brandId: this.brandId,
            serviceId: this.serviceId,
            districtId: this.districtId,
            areaId: this.areaId,
            lineId: this.lineId,
            stationId: this.stationId,
            updateShowDay: true,
            offset: this.offset,
          },
        })
        .then((data) => {
          if (data.status == 200) {
            this.isShow = true;
            this.isLoadingShow = false;
            this.cinemaList = data.data;
          }
        });
    },
    // 获取更多电影院数据
    getMoreCinema() {
      if (this.isMore) {
        this.isMore = false;
      axios
        .get("/index/moreCinemas", {
          params: {
            limit: this.limit,
            cityId: this.cityId,
            day: this.day,
            hallType: this.hallType,
            brandId: this.brandId,
            serviceId: this.serviceId,
            districtId: this.districtId,
            areaId: this.areaId,
            lineId: this.lineId,
            stationId: this.stationId,
            updateShowDay: true,
            offset: this.offset,
          },
        })
        .then((data) => {
          if (data.status == 200) {
            this.isMore = true;
            this.cinemaList = [...this.cinemaList,...data.data];
          }
        });
      }
    },
    // 拉到底部监听
    handleScroll() {
      this.$nextTick(() => {
        if (this.$refs.cinema) {
          let ch = this.$refs.cinema.clientHeight;
          let st = this.$refs.cinema.scrollTop;
          let sh = this.$refs.cinema.scrollHeight;
          setTimeout(() => {
            if (ch + st == sh) {
              if (!(this.cinemaList.length % this.limit)) {
                this.moreTip = true;
                this.offset += 10;
                this.getMoreCinema();
              } else {
                this.moreTip = false;
              }
            }
          }, 300);
        }
      });
    },
    getChildData(obj){
      this.districtId = obj.districtId,
      this.lineId = obj.lineId,
      this.stationId = obj.stationId,
      this.hallType = obj.hallType,
      this.brandId = obj.brandId,
      this.serviceId = obj.serviceId,
      this.areaId = obj.areaId,
      this.limit = 10;
      this.getLocalCinema();
    },
    // 获取当天日期
    getDate(){
      let date = new Date();
      this.day = date.getFullYear() +'-'+ (date.getMonth() + 1) +'-'+ date.getDate();
    },
    toCinemaPage(cinemaId){
      this.$router.push({path:'/cinema', query: {cinemaId,ci:this.cityId,}})
    }
  },
  created() {
    this.getDate();
    if(localStorage.getItem("localCity")){
      this.cityId = JSON.parse(localStorage.getItem("localCity")).id;
    } else {
      this.cityId = this.cityId;
    }
    this.getLocalCinema();
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    cinemaList(arr){
      if(arr.length < this.limit){
        this.moreTip = false;
      } else {
        this.moreTip = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/common/variable.scss";
.cinema {
  height: 100%;
  overflow-y: scroll;
  background-color: $borderColor;
  position: relative;

  > div:first-child {
    position: fixed;
    width: 100%;
    left: 0;
  }
}
.cinemaList {
  padding-top: 40px;
  width: 100%;

  .more {
    display: flex;
    padding: 10px 0;
    margin-top: 10px;
    background-color: #fff;
    span{
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
}
</style>
