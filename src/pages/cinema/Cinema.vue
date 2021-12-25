<template>
  <div class="cinema" ref="cinema">
    <comp-cinemanav :cid="cityId" @get-data="getChildData"></comp-cinemanav>
    <div class="cinemaList">
      <comp-cinemacard
        v-for="item in cinemaList"
        :key="item.cinemaId"
        :citem="item"
      ></comp-cinemacard>
      <div class="more">{{ moreTip }}</div>
    </div>
  </div>
</template>

<script>
import CompCinemanav from "@/components/comp-cinemanav.vue";
import CompCinemacard from "@/components/comp-cinemacard.vue";
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
      moreTip: "加载中...",
      isMore:true,
    };
  },
  components: {
    CompCinemanav,
    CompCinemacard,
  },
  methods: {
    // 获取电影院数据
    getLocalCinema() {
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
                this.moreTip = "加载中...";
                this.offset += 10;
                this.getMoreCinema();
              } else {
                this.moreTip = "没有更多了/(ㄒoㄒ)/~~";
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
      this.limit = 20;
      this.getLocalCinema();
    }
  },
  created() {
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
      if(arr.length < 20){
        this.moreTip = "没有更多了/(ㄒoㄒ)/~~";
      } else {
        this.moreTip = "加载中...";
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
    text-align: center;
    padding: 10px 0;
    margin-top: 10px;
    background-color: #fff;
  }
}
</style>
