<template>
  <div class="cityListBox">
    <div class="searchTip" v-if="!isShow"><span> 加载中...</span></div>
    <div class="cityList" v-if="isShow">
      <div class="location">
        <a id="location"><p>定位城市</p></a>
        <ol>
          <li @click="localClick(localTip)">
            {{ localTip }}
          </li>
        </ol>
      </div>
      <div class="history">
        <a id="history"><p>最近访问城市</p></a>
        <ol>
          <li v-for="item in historyArr" :key="item.id" @click="btnClick(item)">
            {{ item.nm }}
          </li>
        </ol>
      </div>
      <div class="hot">
        <a id="hot"><p>热门城市</p></a>
        <ol>
          <li v-for="item in hotArr" :key="item.id" @click="btnClick(item)">
            {{ item.nm }}
          </li>
        </ol>
      </div>
      <div class="letter">
        <div v-for="(letter, index) in allCityarr" :key="index">
          <a :id="letter"
            ><p>{{ letter.toUpperCase() }}</p></a
          >
          <ul>
            <li
              v-for="item in allCityObj[letter]"
              :key="item.id"
              @click="btnClick(item)"
            >
              {{ item.nm }}
            </li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <span @click="goto('#location')">定位</span>
        <span @click="goto('#history')">最近</span>
        <span @click="goto('#hot')">热门</span>
        <span
          class="letter"
          @click="goto('#' + letter)"
          v-for="(letter, index) in allCityarr"
          :key="index"
          >{{ letter.toUpperCase() }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTip: "正在获取定位",
      uesrCityObj: {},
      historyArr: [],
      hotArr: [],
      allCityarr: [],
      allCityObj: {},
      longitude: "",
      latitude: "",
      isShow: false,
    };
  },
  methods: {
    // 获取城市列表
    getCityList() {
      axios.get("/cities.json").then((data) => {
        if (data.status == 200) {
          this.isShow = true;
          let allCityList = data.data.cts;
          let hotList = data.data.hot;
          allCityList.forEach((item) => {
            for (let i = 0; i < hotList.length; i++) {
              if (hotList[i] == item.nm) {
                let hotObj = {};
                hotObj.nm = hotList[i];
                hotObj.id = item.id;
                hotObj.py = item.py;
                this.hotArr.push(hotObj);
              }
            }
            let firstLetter = item.py.slice(0, 1);
            if (!this.allCityObj[firstLetter]) {
              this.allCityObj[firstLetter] = [];
              this.allCityarr.push(firstLetter);
            }
            if (item.py.slice(0, 1) == firstLetter) {
              this.allCityObj[firstLetter].push(item);
            }
          });
          this.allCityarr.sort();
        }
      });
    },
    // 锚点
    goto(id) {
      document.querySelector(id).scrollIntoView(true);
    },
    // 选择城市
    btnClick(obj) {
      let i = 0;
      this.historyArr.forEach((item, index) => {
        if (item.id == obj.id) {
          if (obj.id != this.historyArr[0].id) {
            this.historyArr.splice(
              this.historyArr.findIndex(
                (items) => items.id === this.historyArr[index].id
              ),
              1
            );
            this.historyArr.unshift(obj);
          }
        } else {
          i++;
        }
      });
      if (i == this.historyArr.length && this.historyArr.length >= 3) {
        this.historyArr.pop();
        this.historyArr.unshift(obj);
      } else if (i == this.historyArr.length) {
        this.historyArr.unshift(obj);
      }
      localStorage.setItem("historyCity", JSON.stringify(this.historyArr));
      localStorage.setItem("localCity", JSON.stringify(obj));
      this.$router.back();
    },
    // 获取经纬度
    getLatLng() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          //locationSuccess 获取成功的话
          (position) => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
          },
          //locationError  获取失败的话
          (error) => {
            let errorType = [
              "您拒绝共享位置信息",
              "获取不到位置信息",
              "获取位置信息超时",
              "未知错误",
            ];
            this.localTip = errorType[error.code - 1];
          }
        );
      }
    },
    // 获取经纬度对应城市
    getLocation() {
      axios
        .get("/city/latlng", {
          params: { lat: this.latitude, lng: this.longitude },
        })
        .then((data) => {
          if (data.status == 200) {
            this.localTip = data.data.data.city;
            this.uesrCityObj.nm = data.data.data.city;
            this.uesrCityObj.py = data.data.data.cityPinyin;
            this.uesrCityObj.id = data.data.data.id;
          }
        });
    },
    // 定位按钮
    localClick(tip) {
      if (
        tip == "您拒绝共享位置信息" ||
        tip == "获取不到位置信息" ||
        tip == "获取位置信息超时" ||
        tip == "未知错误"
      ) {
        this.localTip = "正在获取定位";
        this.getLatLng();
      } else if (tip != "正在获取定位") {
        this.btnClick(this.uesrCityObj);
      }
    },
  },
  created() {
    this.getCityList();
    if(localStorage.getItem("historyCity")){
      this.historyArr = JSON.parse(localStorage.getItem("historyCity"));
    }else {
      this.historyArr = this.historyArr;
    }
    
    this.getLatLng();
  },
  watch: {
    longitude() {
      this.getLocation();
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/common/variable.scss";
.cityListBox{
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background-color: #f5f5f5;

}

.cityList {
  padding-bottom: 10px;
  background-color: #f5f5f5;

  a {
    display: block;
  }

  p {
    padding: 8px 15px;
    font-size: 14px;
    background-color: #ebebeb;
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    padding-right: 30px;
    margin-top: 15px;

    li {
      background-color: #fff;
      min-width: 100px;
      max-width: 100px;
      text-align: center;
      padding: 6px 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      box-sizing: border-box;
      font-size: 14px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      margin: 0 0 15px 15px;
    }
  }

  ul {
    padding-right: 30px;
    li {
      font-size: 14px;
      margin-left: 15px;
      padding: 15px 0;
      border-bottom: 1px solid #c8c7cc;
    }
    li:last-child {
      border-bottom: none;
    }
  }

  .nav {
    position: fixed;
    right: 0;
    top: 12vh;
    font-size: 12px;
    margin-right: 3px;

    span {
      display: block;
      padding: 3px 0;
    }

    .letter {
      text-align: center;
    }
  }

  .location {
    li {
      max-width: 200px;
    }
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
::-webkit-scrollbar {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>