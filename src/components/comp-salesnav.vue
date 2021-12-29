<template>
  <div class="navBox">
    <div class="navBg">
      <div class="cinemaNav">
        <div
          v-for="(item, index) in navArr"
          :key="index"
          :class="item.class"
          @click="addActive(index)"
        >
          <span class="title">{{ item.title }}</span>
          <i class="bi" :class="item.iClass"></i>
        </div>
      </div>
      <div class="content" v-if="page">
        <div class="total" v-if="page == 1">
          <div class="tabNav">
            <div @click="tabIndex = 0" :class="{ active: tabIndex == 0 }">
              商区
            </div>
            <div @click="tabIndex = 1" :class="{ active: tabIndex == 1 }">
              地铁站
            </div>
          </div>
          <div class="tabBody">
            <div class="tabLiftBox">
              <ul class="tabLiftList">
                <li
                  v-for="(item, index) in totalShow"
                  :key="item.id"
                  @click="
                    tabAcitveClick(index);
                    tabAcitve = index;
                  "
                  :class="{ active: tabAcitve == index }"
                >
                  {{ item.name }}({{ item.count }})
                </li>
              </ul>
            </div>
            <div class="tabRightBox">
              <ul class="tabRightList">
                <li
                  v-for="item in subItems"
                  :key="item.id"
                  @click="
                    tab2AcitveClick(item.id);
                    tab2Acitve = item.id;
                    navArr[0].title = item.id == -1 ? districtName : item.name;
                  "
                  :class="{ active: tab2Acitve == item.id }"
                >
                  <span>{{ item.name }}</span
                  ><span>{{ item.count }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="brand" v-if="page == 2">
          <div class="brandList">
            <div
              class="brandItem"
              v-for="item in brand"
              :key="item.id"
              @click="
                brandIds = item.id;
                navArr[1].title = item.id == -1 ? '品牌' : item.name;
                dataProcessing();
                maskClick();
              "
              :class="{ active: brandIds == item.id }"
            >
              <span>{{ item.name }}</span
              ><span>{{ item.count }}</span>
            </div>
          </div>
        </div>
        <div class="feature" v-if="page == 3">
          <div class="featureBox">
            <div class="fun" v-if="service.length">
              <h3>影院服务</h3>
              <ul class="splist">
                <li
                  v-for="item in service"
                  :key="item.id"
                  @click="serviceIds = item.id"
                  :class="{ active: serviceIds == item.id }"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="fun" v-if="language.length">
              <h3>放映语言</h3>
              <ul class="language">
                <li
                  v-for="item in language"
                  :key="item.code"
                  @click="languageIds = item.code"
                  :class="{ active: languageIds == item.code }"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="fun" v-if="dim.length">
              <h3>影片版本</h3>
              <ul class="dim">
                <li
                  v-for="item in dim"
                  :key="item.code"
                  @click="dimIds = item.code"
                  :class="{ active: dimIds == item.code }"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="hall" v-if="hallType.length">
              <h3>影厅类型</h3>
              <ul class="splist">
                <li
                  v-for="item in hallType"
                  :key="item.code"
                  @click="hallTypeIds = item.code"
                  :class="{ active: hallTypeIds == item.code }"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="btnBox">
            <div
              class="reset"
              @click="hallTypeIds = languageIds = dimIds = 'all'; serviceIds = -1;"
            >
              重置
            </div>
            <div
              class="confirm"
              @click="
                dataProcessing();
                maskClick();
              "
            >
              确定
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isMask" @click="maskClick"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        { title: "全城", iClass: "bi-caret-down-fill", class: "" },
        { title: "品牌", iClass: "bi-caret-down-fill", class: "" },
        { title: "特色", iClass: "bi-caret-down-fill", class: "" },
      ],
      isMask: false,
      page: 0,
      tabIndex: 0,
      cityId: 1,
      tabAcitve: 0,
      tab2Acitve: -1,
      districtName: "",

      district: [],
      subway: [],
      totalShow: [],
      subItems: [],
      brand: [],
      service: [],
      hallType: [],
      language: [],
      dim: [],

      hallTypeIds: "all", // 影厅类型
      brandIds: -1, // 品牌
      serviceIds: -1, // 影院服务
      districtId: -1, // 行政区
      areaId: -1, // 行政区二级地区
      lineId: -1, // 地铁线路
      stationId: -1, // 地铁车站
      languageIds: "all", // 语言
      dimIds: "all", // 版本

      pdistrictId: -1,
      plineId: -1,
    };
  },
  props: ["cid", "mid", "date"],
  methods: {
    // 点击影院导航
    addActive(i) {
      if (this.navArr[i].class == "active") {
        this.navArr[i].class = "";
        this.navArr[i].iClass = "bi-caret-down-fill";
        this.isMask = false;
        this.page = 0;
        this.tabIndex = 0;
      } else {
        this.navArr.forEach((item) => {
          item.class = "";
          item.iClass = "bi-caret-down-fill";
          this.page = 0;
          this.tabIndex = 0;
        });
        this.navArr[i].class = "active";
        this.navArr[i].iClass = "bi-caret-up-fill";
        this.isMask = true;
        this.page = i + 1;
        if (this.totalShow.length == 0) {
          this.getTotalData();
        }
      }
    },
    // 点击遮罩层
    maskClick() {
      this.navArr.forEach((item) => {
        item.class = "";
        item.iClass = "bi-caret-down-fill";
      });
      this.isMask = false;
      this.page = 0;
      this.tabIndex = 0;
    },

    // 处理筛选数据
    dataProcessing() {
      this.$emit("get-data", {
        districtId: this.districtId,
        lineId: this.lineId,
        stationId: this.stationId,
        hallTypeIds: this.hallTypeIds,
        brandIds: this.brandIds,
        serviceIds: this.serviceIds,
        areaId: this.areaId,
        languageIds: this.languageIds,
        dimIds: this.dimIds,
      });
    },

    // 获取全城数据
    getTotalData() {
      axios
        .get("/movie/select/items", {
          params: { cityId: this.cid, movieId: this.mid, showDate: this.date },
        })
        .then((data) => {
          if (data.status == 200) {
            let list = data.data.data;
            
            this.totalShow = list.district.subItems;
            this.district = list.district.subItems;
            this.subway = list.subway.subItems;

            this.brand = list.brand.subItems;

            this.service = list.service.subItems;

            if(this.hallType.length){
              this.hallType = list.hallType.subItems;
            }
            if(this.language.length){
              this.language = list.language.subItems;
            }
            if(this.dim.length){
              this.dim = list.dim.subItems;
            }
          }
        });
    },

    // 全城
    // 点击一级筛选
    tabAcitveClick(t1) {
      if (t1 == 0) {
        this.lineId = -1;
        this.districtId = -1;
        this.stationId = -1;
        this.areaId = -1;
        this.tab2Acitve = -1;
        this.navArr[0].title = "全城";
        this.dataProcessing();
        this.maskClick();
      } else {
        this.districtName = this.totalShow[t1].name;
        this.subItems = this.totalShow[t1].subItems;
        if (this.tabIndex == 0) {
          this.pdistrictId = this.totalShow[t1].id;
          this.lineId = -1;
        } else {
          this.plineId = this.totalShow[t1].id;
          this.districtId = -1;
        }
      }
    },
    // 点击二级筛选
    tab2AcitveClick(t2) {
      if (this.tabIndex == 0) {
        this.areaId = t2;
        this.stationId = -1;
        this.districtId = this.pdistrictId;
      } else {
        this.stationId = t2;
        this.areaId = -1;
        this.lineId = this.plineId;
      }
      this.dataProcessing();
      this.maskClick();
    },
  },
  watch: {
    tabIndex(val) {
      if (val) {
        this.totalShow = this.subway;
        this.tabAcitve = 0;
        this.tab2Acitve = -1;
        this.subItems = this.totalShow[0].subItems;
      } else {
        this.totalShow = this.district;
        this.tabAcitve = 0;
        this.tab2Acitve = -1;
        this.subItems = this.totalShow[0].subItems;
      }
    },
    date(val){
      this.getTotalData();
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/common/variable.scss";
.navBox {
  position: relative;
  z-index: 101;
}
.navBg {
  position: relative;
  z-index: 102;
  width: 100%;
  background-color: #fff;
}
.cinemaNav {
  position: relative;
  z-index: 103;
  display: flex;
  font-size: 14px;
  color: #777;
  margin: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid $borderColor;

  > div {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
  }

  > div:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: -2px;
    color: $borderColor;
  }

  i {
    font-size: 12px;
    margin-left: 5px;
    color: #ccc;
  }

  .active {
    color: $color;

    i {
      color: $color;
    }
  }

  .title {
    display: inline-block;
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.content {
  width: 100%;
  height: 350px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 39px;
  z-index: 101;
}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 100;
}

.total {
  background-color: #f5f5f5;
  .tabNav {
    display: flex;
    background-color: #fff;

    > div {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      font-size: 15px;
      box-sizing: border-box;
    }

    .active {
      color: $color;
      border-bottom: 1px solid $color;
    }
  }

  .tabList {
    background-color: #f5f5f5;
  }

  .tabBody {
    display: flex;
    align-items: start;
    height: 350px;
  }

  .tabLiftBox {
    width: 35%;
    height: 350px;
    overflow-y: scroll;
    background-color: #fff;
  }

  .tabLiftList {
    li {
      box-sizing: border-box;
      padding: 0 15px 0 10px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      color: #777;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .active {
      color: $color;
      background-color: #f5f5f5;
    }
  }

  .tabRightBox {
    flex: 1;
    height: 350px;
    overflow-y: scroll;
    background-color: #f5f5f5;
  }

  .tabRightList {
    li {
      box-sizing: border-box;
      padding: 0 10px 0 20px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }

    .active {
      position: relative;
      > span {
        color: $color !important;
      }
    }

    .active::after {
      content: "√";
      display: inline-block;
      width: 10px;
      height: 10px;
      color: $color;
      position: absolute;
      top: 0;
      left: 5px;
    }

    span:last-child {
      color: #777;
      font-size: 12px;
    }
  }
}

.brand {
  overflow-y: scroll;
  height: 100%;

  .brandItem {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 25px 0 30px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border-bottom: 1px solid $borderColor;

    span:last-child {
      color: #777;
      font-size: 12px;
    }
  }

  .active {
    position: relative;
    > span {
      color: $color !important;
    }
  }

  .active::after {
    content: "√";
    display: inline-block;
    width: 10px;
    height: 10px;
    color: $color;
    position: absolute;
    top: 0;
    left: 15px;
  }
}

.feature {
  position: relative;
  height: 100%;

  .featureBox {
    height: calc(100% - 60px);
    overflow-y: scroll;
  }

  h3 {
    font-weight: normal;
    font-size: 16px;
    color: #777;
    padding: 10px 0 10px 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 15px;
  }

  li {
    width: 75px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    box-sizing: border-box;
    color: #777;
    border: 1px solid $borderColor;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    border-radius: 5px;

    &:not(:nth-child(4n)) {
      margin-right: 10px;
    }

    &:not(:nth-child(-n + 4)) {
      margin-top: 10px;
    }
  }

  .hall {
    margin-bottom: 10px;
  }

  .active {
    color: $color;
    border: 1px solid $color;
    background-color: rgba($color: $color, $alpha: 0.1);
  }

  .btnBox {
    height: 60px;
    width: 100%;
    background-color: #fafafa;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 15px;
    border-top: 1px solid $borderColor;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      font-size: 16px;
      padding: 7px 25px;
      border: 1px solid $borderColor;
      border-radius: 5px;
    }

    .confirm {
      background-color: $color;
      color: #fff;
      border: 1px solid $color;
    }
  }
}
</style>