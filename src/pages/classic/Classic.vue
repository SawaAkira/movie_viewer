<template>
  <div class="classicList" ref="classic">
    <comp-classiccard
      v-for="item in classicMovieList"
      :key="item.movieId"
      :citem="item"
    ></comp-classiccard>
    <div class="more" v-if="isShow">
        <comp-loadinganimate v-if="moreTip" :wah="50"></comp-loadinganimate>
        <span v-if="!moreTip">没有更多了/(ㄒoㄒ)/~~</span>
    </div>
    <div class="loadingBox" v-if="isLoadingShow">
      <comp-loadinganimate :wah="80"></comp-loadinganimate>
    </div>
  </div>
</template>

<script>
import CompClassiccard from "@/components/comp-classiccard.vue";
import CompLoadinganimate from '@/components/comp-loadinganimate.vue'
export default {
  data() {
    return {
      limit: 10,
      offset: 0,
      classicMovieList: [],
      moreTip: true,
      isMore: true,
      isLoadingShow: true,
      isShow: false,
    };
  },
  components: {
    CompClassiccard,
    CompLoadinganimate,
  },
  methods: {
    // 获取电影列表
    getClassicMovie() {
      axios
        .get("/index/moreClassicList", {
          params: {
            sortId: 1,
            showType: 3,
            offset: this.offset,
            limit: this.limit,
          },
        })
        .then((data) => {
          this.isShow = true;
          this.isLoadingShow = false;
          if (data.status == 200) {
            this.classicMovieList = data.data;
          }
        });
    },
    // 获取更多电影列表
    getMoreClassic() {
      if (this.isMore) {
        this.isMore = false;
        axios
          .get("/index/moreClassicList", {
            params: {
              sortId: 1,
              showType: 3,
              offset: this.offset,
              limit: this.limit,
            },
          })
          .then((data) => {
            if (data.status == 200) {
              this.isMore = true;
              this.classicMovieList = [
                ...this.classicMovieList,
                ...data.data,
              ];
            }
          });
      }
    },
    // 拉到底部监听
    handleScroll() {
      this.$nextTick(() => {
        if (this.$refs.classic) {
          let ch = this.$refs.classic.clientHeight;
          let st = this.$refs.classic.scrollTop;
          let sh = this.$refs.classic.scrollHeight;
          setTimeout(() => {
            if (ch + st == sh) {
              if (!(this.classicMovieList.length % this.limit)) {
                this.offset += 10;
                this.getMoreClassic();
              } else {
                this.moreTip = false;
              }
            }
          }, 300);
        }
      });
    },
  },
  created() {
    this.getClassicMovie();
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
.classicList {
  height: 100%;
  overflow-y: auto;
  background-color: $borderColor;

  > div:first-child {
    padding-top: 20px;
  }

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