<template>
  <div>
    <div class="movieInfoPage" :style="{ backgroundColor: movieDataList.backgroundColor }">
      <div class="link" v-if="isShow"><router-link to="/">观影人电影 > </router-link>{{movieDataList.nm}}</div>
      <comp-infoheader :mdata="movieDataList"></comp-infoheader>
      <comp-infoscore :mdata="movieDataList"></comp-infoscore>
      <div class="intro" v-if="isShow">
        <div class="miHeader"><h3>简介</h3><span @click="unfold=!unfold">{{unfold?"收起 ":"展开 "}}<i class="bi" :class="{'bi-chevron-down':!unfold,'bi-chevron-up':unfold}"></i></span></div>
        <p :class="{textHidden:!unfold}">{{movieDataList.dra}}</p>
      </div>
      <div class="cast" v-if="isShow">
        <div class="miHeader"><h3>演职人员</h3><span>全部 <i class="bi bi-chevron-right"></i></span></div>
        <div class="miBox">
          <div class="miList">
            <template v-for="(item,index) in castList">
              <div class="castItem" :key="index" v-if="item.desc">
                <div class="imgBox">
                  <img :src="item.avatar.replace('w.h','80.112')" alt="">
                </div>
                <span class="cname">{{item.cnm}}</span>
                <span class="crole">{{item.desc}}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="videoRecommend" v-if="videoList.length">
        <div class="miHeader"><h3>视频推荐</h3><span>全部 <i class="bi bi-chevron-right"></i></span></div>
        <div class="miBox">
          <div class="miList">
            <div class="vrItem" v-for="item in videoList" :key="item.video.id">
              <div class="imgBox">
                <img :src="item.video.imgUrl" alt="">
                <i class="bi bi-play-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="stills" v-if="movieDataList.pn">
        <div class="miHeader"><h3>剧照</h3><span>{{"全部" + movieDataList.pn + "张"}} <i class="bi bi-chevron-right"></i></span></div>
        <div class="miBox">
          <div class="miList">
            <div class="stillsItem" v-for="(item,index) in movieDataList.photos" :key="index">
              <div class="imgBox">
                <img :src="item.replace('w.h','140.93')" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loadingBox" v-if="isLoading">
      <comp-loadinganimate :wah="80"></comp-loadinganimate>
    </div>
  </div>
</template>

<script>
import CompInfoheader from "@/components/comp-infoheader.vue";
import CompInfoscore from "@/components/comp-infoscore.vue";
import CompLoadinganimate from '@/components/comp-loadinganimate.vue'
export default {
  name: "MovieInfo",
  data() {
    return {
      movieId: "",
      movieDataList: [],
      castList: [],
      videoList: [],
      isLoading: true,
      isShow: false,
      unfold: false,
    };
  },
  components: {
    CompInfoheader,
    CompInfoscore,
    CompLoadinganimate,
  },
  methods: {
    getMovieInfo() {
      this.movieId = this.$route.params.id;
      axios.get("/movie/detail",{params:{movieid:this.movieId}}).then((data) => {
        if (data.status == 200) {
          this.isShow = true;
          this.isLoading = false;
          this.movieDataList = data.data.movie;
          this.castList = data.data.celebrities;
          if(data.data.feedVideos){
            this.videoList = data.data.feedVideos.feeds;
          } 
          document.title = this.movieDataList.nm + "-观影人电影";
        }
      });
    },
  },
  created() {
    this.getMovieInfo();
  },
};
</script>

<style lang="scss" scoped>
.movieInfoPage {
  height: 100%;
  min-height: 100vh;
  padding: 20px 18px;
  box-sizing: border-box;

  >div:nth-child(2){
    margin-top: 20px;
  }
}

.link{
  font-size: 14px;
  color: #bbb;

  a{
    color: #bbb;
  }
}

.loadingBox {
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(50% - 80px / 2);
}
.scoreBox{
  margin-top: 15px;
}

.intro{
  margin-top: 20px;
  padding-bottom: 20px;
  p{
    line-height: 25px;
    font-size: 15px;
    color: #eee;
    word-wrap: break-word;
    word-break: break-all;
  }
}

.miHeader{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  >h3{
    font-weight: normal;
    font-size: 16px;
    color: #eee;
  }
  >span{
    font-size: 13px;
    color: #aaa;
  }
}
.textHidden{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
}

.miBox{
  overflow-x: scroll;
  width: 100%;
}

.miList{
  display: flex;
  padding: 10px 0 15px;
}

.castItem{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  width: 80px;
  margin-right: 8px;
  
  .imgBox{
    width: 80px;
    height: 112px;
    
    img{
      width: 100%;
      height: 100%;
    }
  }

  .cname{
    color: #eee;
  }

  .crole{
    color: #aaa;
  }

  >span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.vrItem{
  &:not(:last-child){
    margin-right: 10px;
  }

  .imgBox{
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    width: 140px;
    height: 93px;

    img{
      width: 100%;
      height: 100%;
    }

    i{
      color: #eee;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.stillsItem{
  &:not(:last-child){
    margin-right: 10px;
  }
  .imgBox{
    width: 140px;
    height: 93px;
    overflow: hidden;

    img{
      width: 100%;
      min-height: 100%;
    }
  }
}
::-webkit-scrollbar {
    display: none;
}
</style>