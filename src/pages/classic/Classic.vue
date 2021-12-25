<template>
  <div class="classicList" ref="classic">
    <comp-classiccard
      v-for="item in classicMovieList"
      :key="item.movieId"
      :citem="item"
    ></comp-classiccard>
    <div class="more">{{ moreTip }}</div>
  </div>
</template>

<script>
import CompClassiccard from "@/components/comp-classiccard.vue";
export default {
  data() {
    return {
      limit: 10,
      offset: 0,
      classicMovieList: [],
      moreTip: "加载中...",
      isMore: true,
    };
  },
  components: {
    CompClassiccard,
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
                this.moreTip = "没有更多了/(ㄒoㄒ)/~~";
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
    text-align: center;
    padding: 10px 0;
    margin-top: 10px;
    background-color: #fff;
  }
}
</style>