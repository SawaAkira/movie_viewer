<template>
  <div class="movie">
    <div class="mnav">
      <div class="city">
        <router-link to="/city-list"><span>{{localCity}}</span><i class="bi bi-caret-down-fill"></i
        ></router-link>
      </div>
      <ul>
        <li><router-link exact-active-class="active" to="/movie/hot">热映</router-link></li>
        <li><router-link exact-active-class="active" to="/movie/cinema">影院</router-link></li>
        <li><router-link exact-active-class="active" to="/movie/wait">待映</router-link></li>
        <li><router-link exact-active-class="active" to="/movie/classic">经典电影</router-link></li>
      </ul>
      <div class="search">
        <router-link to="/search"><i class="bi bi-search"></i></router-link>
      </div>
    </div>
    <div class="mainBox">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      localCity: "北京",
    };
  },
  created() {
    if(localStorage.getItem("localCity")){
      this.localCity = JSON.parse(localStorage.getItem("localCity")).nm;
    } else {
      this.localCity = this.localCity;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/common/variable.scss';
.movie {
  display: flex;
  flex-direction: column;
  font-size: 16px;

  .mnav {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $borderColor;
    box-sizing: border-box;

    >div,
    >ul{
      height: 45px;
      line-height: 45px;
    }
  }
  .city {
    max-width: 85px;
    text-align: center;
    padding-left: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    a{
      display: flex;
      color: $color2;
      font-size: 14px;

      span{
        display: block;
        max-width: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    i {
      font-size: 12px;
      margin-left: 3px;
      color: #b0b0b0;
    }
  }

  ul {
    font-size: 16px;
    display: flex;

    li {
      position: relative;
    }

    a{
      padding: 0 10px;
      color: $color2;
    }
  }

  .search {
    padding-right: 5px;
    i {
      padding: 0 10px;
      color: $color;
    }
  }

  .active{
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }

  li:last-child .active{
    padding: 0 8px;
  }

  .active::after{
    content: "";
    display: block;
    width: 25px;
    height: 3px;
    position: absolute;
    bottom: 1px;
    left: calc(50% - 25px / 2);
    background-color: $bgColor;
  }

  .mainBox{
    overflow-y: scroll;
    margin-bottom: 50px;
    height: calc(100vh - 54px - 60px - 46px);
  }

  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
