<template>
  <div class="scoreBox" v-if="isShow">
    <div class="scoreHeader">
      <div class="title"><i class="bi bi-graph-up"></i>{{ title }}</div>
      <div class="wish" v-if="isWish">{{ numChange(mdata.wish) }}人想看</div>
      <div class="watched" v-if="isWatched">
        {{ numChange(mdata.watched) }}人看过<i class="bi bi-chevron-right"></i>
      </div>
    </div>
    <div class="scoreContent">
      <span class="score" v-if="isWish">{{ mdata.sc.toFixed(1) }}</span>
      <div class="star" v-if="isWish">
        <i v-for="(item, index) in starArr" :key="index" :class="item"></i>
      </div>
      <div class="wish_num" v-if="!isWish">
        <span>{{ numChange(mdata.wish) }}</span> 人想看
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      isWish: true,
      isWatched: true,
      isShow: false,
      starArr: [],
    };
  },
  props: ["mdata"],
  watch: {
    mdata(data) {
      this.isShow = true;
      if (data.scoreLabel == "暂无评分") {
        this.title = "观影人想看";
        this.isWish = false;
        this.isWatched = false;
      } else {
        if (data.scoreLabel == "猫眼综合评分") {
          this.isWatched = false;
        }
        this.starNum(data.sc);
        this.title = data.scoreLabel.replace("猫眼", "观影人");
      }
    },
  },
  methods: {
    numChange(num) {
      if (num) {
        let arr = [];
        let l = num.toString().length;
        let str = num.toString();
        if (l > 3) {
          let f = () => {
            arr.unshift(str.slice(l - 3, l + 1));
            str = str.slice(0, l - 3);
            l = l - 3;
            if (l >= 3) {
              f();
            }
          };
          f();
          if (l) {
            arr.unshift(str);
          }
          return arr.join(",");
        } else {
          return str;
        }

        
      }
    },
    starNum(score) {
      let s = Math.floor(Math.floor(score) / 2);
      let h = Math.ceil(Math.floor(score) / 2) - s;
      let n = 5 - s - h;
      for (let i = 1; i <= s; i++) {
        this.starArr.push("bi bi-star-fill");
      }
      for (let i = 1; i <= h; i++) {
        this.starArr.push("bi bi-star-half");
      }
      for (let i = 1; i <= n; i++) {
        this.starArr.push("bi bi-star");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/common/variable.scss";
.scoreBox {
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  border-radius: 5px;
  padding: 10px 12px;
  box-sizing: border-box;
}
.scoreHeader {
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.title {
  flex: 1;

  i {
    margin-right: 5px;
  }
}

.wish,
.watched {
  color: #ccc;
  letter-spacing: -0.5px;
}

.watched {
  margin-left: 8px;
}

.scoreContent {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 15px 0 5px;
  color: $color4;

  span {
    font-size: 28px;
    font-weight: bold;
  }
  .star {
    font-size: 13px;
    margin-left: 3px;
    padding-bottom: 5px;
  }

  .wish_num {
    font-size: 13px;
    color: #eee;

    span {
      color: $color4;
    }
  }
}
</style>