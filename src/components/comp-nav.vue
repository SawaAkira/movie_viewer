<template>
  <div class="nav">
    <ul class="nav-box">
      <li>
        <router-link active-class="active" to="/movie">
          <div class="bgBox"></div>
          <div class="text">电影/影院</div>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/video">
          <div class="bgBox"></div>
          <div class="text">视频</div>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/shortvideo">
          <div class="bgBox"></div>
          <div class="text">短视频</div>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/personal">
          <div class="bgBox"></div>
          <div class="text">我的</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/common/variable.scss";

.nav {
  width: 100%;
  border-top: 1px solid $borderColor;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
}

.nav-box {
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  > li {
    flex: 1;
    padding-top: 5px;
  }
}

a {
  display: block;
}

.bgBox {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

.text {
  color: $color2;
  text-align: center;
}

li:nth-child(1) .bgBox {
  background: url(../assets/nav/movie.png) no-repeat 0 0 / cover;
}

li:nth-child(2) .bgBox {
  background: url(../assets/nav/video.png) no-repeat 0 0 / cover;
}

li:nth-child(3) .bgBox {
  background: url(../assets/nav/shortvideo.png) no-repeat 0 0 / cover;
}

li:nth-child(4) .bgBox {
  background: url(../assets/nav/personal.png) no-repeat 0 0 / cover;
}

.active {
  .text {
    color: $color;
  }
}

li:nth-child(1) .active .bgBox {
  background: url(../assets/nav/movie_active.png) no-repeat 0 0 / cover;
}

li:nth-child(2) .active .bgBox {
  background: url(../assets/nav/video_active.png) no-repeat 0 0 / cover;
}

li:nth-child(3) .active .bgBox {
  background: url(../assets/nav/shortvideo_active.png) no-repeat 0 0 / cover;
}

li:nth-child(4) .active .bgBox {
  background: url(../assets/nav/personal_active.png) no-repeat 0 0 / cover;
}
</style>
