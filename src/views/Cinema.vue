<template>
  <div>
    <comp-header>
      <div class="imgBox"><img src="../assets/logotext.png" alt="" /></div>
    </comp-header>
    <div class="cinemaHeader" v-if="movieList.length">
      <div class="cinemaInfo">
        <h3 class="cname text-ellipsis">{{ cinemaInfoObj.nm }}</h3>
        <p class="caddr text-ellipsis">{{ cinemaInfoObj.addr }}</p>
      </div>
      <div class="addrIcon"><i class="bi bi-geo-alt"></i></div>
    </div>
    <div class="swiper" v-if="movieList.length">
      <comp-swiper
        @swiper-click="getSwiperId"
        :cmovie="movieList"
        :cindex="movieIndex"
      ></comp-swiper>
    </div>
    <div class="movieInfo" v-if="movieList.length">
      <div class="movieHeader">
        <h3>{{ movieList[movieIndex].nm }}</h3>
        <span>{{ movieText }}</span>
      </div>
      <p>{{ movieList[movieIndex].desc }}</p>
    </div>
    <ul class="dateList" v-if="movieList.length">
      <li
        v-for="(item, index) in movieList[movieIndex].shows"
        :key="index"
        @click="
          dateIndex = index;
          plist = item.plist;
        "
        :class="{ active: dateIndex == index }"
      >
        {{ item.showDate.slice(5).replace("-", "月") + "日" }}
      </li>
    </ul>
    <div class="sessionList">
      <comp-sessioncard
        v-for="(item, index) in plist"
        :key="index"
        :citem="item"
        :clong="long"
      ></comp-sessioncard>
    </div>
    <div class="loadingBox" v-if="isLoadingShow">
      <comp-loadinganimate :wah="80"></comp-loadinganimate>
    </div>
  </div>
</template>


<script>
import CompHeader from "@/components/comp-header.vue";
import CompSwiper from "@/components/comp-swiper.vue";
import CompSessioncard from "@/components/comp-sessioncard.vue";
import CompLoadinganimate from "@/components/comp-loadinganimate.vue";
export default {
  data() {
    return {
      cinemaId: 0,
      ci: 1,
      movieId: 0,
      date: "",
      movieList: [],
      movieIndex: 0,
      movieText: "",
      cinemaInfoObj: "",
      dateIndex: 0,
      plist: [],
      long: "",

      isLoadingShow: true,
    };
  },
  components: {
    CompHeader,
    CompSwiper,
    CompSessioncard,
    CompLoadinganimate,
  },
  methods: {
    getCinemaInfo() {
      axios
        .get("/cinema/detail", { params: { cinemaId: this.cinemaId } })
        .then((data) => {
          if (data.status == 200) {
            this.cinemaInfoObj = data.data.data;
            document.title = this.cinemaInfoObj.nm;
          }
        });
    },
    getCinemaMovie() {
      axios
        .get("/cinema/shows", {
          params: { cinemaId: this.cinemaId, ci: this.ci, channelId: 4 },
        })
        .then((data) => {
          if (data.status == 200) {
            this.isLoadingShow = false;
            this.movieList = data.data.data.movies;
            this.movieText = this.movieList[this.movieIndex].sc;
            this.movieId = this.movieList[this.movieIndex].id;
            this.long = parseInt(this.movieList[this.movieIndex].desc);
            this.plist =
              this.movieList[this.movieIndex].shows[this.dateIndex].plist;
          }
        });
    },
    getSwiperId(i) {
      this.movieIndex = i;
    },
  },
  created() {
    this.cinemaId = this.$route.query.cinemaId;
    if (this.$route.query.ci) {
      this.ci = this.$route.query.ci;
    }
    if (this.$route.query.movieId) {
      this.movieId = this.$route.query.movieId;
    }
    if (this.$route.query.date) {
      this.date = this.$route.query.date;
    }
    this.getCinemaInfo();
    this.getCinemaMovie();
  },
  watch: {
    movieIndex() {
      this.movieId = this.movieList[this.movieIndex].id;
      this.movieText =
        this.movieList[this.movieIndex].sc == "0.0"
          ? this.movieList[this.movieIndex].wish + "人想看"
          : this.movieList[this.movieIndex].sc + "分";
      this.long = parseInt(this.movieList[this.movieIndex].desc);
      this.dateIndex = 0;
      this.plist = this.movieList[this.movieIndex].shows[this.dateIndex].plist;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/common/variable.scss";
.imgBox {
  width: 100px;
  img {
    width: 100%;
    vertical-align: text-bottom;
  }
}
.cinemaHeader {
  display: flex;

  .cinemaInfo {
    max-width: calc(100vw - 70px);
    padding: 15px;
    box-sizing: border-box;
  }

  .cname {
    font-size: 18px;
  }

  .caddr {
    font-size: 15px;
    color: #999;
    margin-top: 3px;
  }

  .addrIcon {
    width: 70px;
    flex: none;
    text-align: center;
    position: relative;

    i {
      font-size: 24px;
      color: $color;
      position: absolute;
      top: calc(50% - 31px / 2);
      right: calc(50% - 23px / 2);
    }

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 30px;
      border-left: 1px solid $borderColor;
      position: absolute;
      left: 0;
      top: calc(50% - 30px / 2);
    }
  }
}
.movieInfo {
  font-size: 18px;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid $borderColor;
  .movieHeader {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    span {
      font-size: 14px;
      font-weight: bold;
      margin-left: 5px;
      color: $color4;
    }
  }

  p {
    margin-top: 3px;
    font-size: 13px;
    color: #999;
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
.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.loadingBox {
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(50% - 80px / 2);
}
::-webkit-scrollbar {
  display: none;
}
</style>
