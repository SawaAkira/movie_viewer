<template>
    <div class="video" ref="video">
        <div class="videoList">
            <comp-videocard v-for="(item, index) in videoList" :key="index" :info="item" @playId="getPlayId" @endPlayId="endPlayId"></comp-videocard>
        </div>
        <div class="loadingBox" v-if="!canIGet">
            <comp-loadinganimate :wah="80"></comp-loadinganimate>
        </div>
    </div>
</template>

<script>
import CompVideocard from "@/components/comp-videocard.vue";
import CompLoadinganimate from '@/components/comp-loadinganimate.vue';
export default {
    data(){
        return{
            offset: 0,
            videoList: [],
            canIGet: false,
        }
    },
    components: {
        CompVideocard,
        CompLoadinganimate
    },
    methods: {
        getViedoList(){
            this.canIGet = false;
            axios.get("/video/" + this.offset).then((data) => {
              if (data.status == 200) {
                let list = data.data.data.feeds;
                let newList = [];
                list.forEach(item => {
                    let obj = {};
                    obj.id = item.id
                    obj.author = item.user.nickName;
                    obj.isPlay = false;
                    obj.avatar = item.user.avatarurl;
                    obj.title = item.title;
                    obj.img = null;
                    obj.video = null;
                    obj.time = null;
                    if(item.video){
                      obj.img = item.video.imgUrl;
                      obj.video = item.video.url;
                      obj.time = this.formatTime(item.video.dur);
                    }
                    newList.push(obj);
                })
                this.videoList = this.videoList.concat(newList);
                this.canIGet = true;
              }
            });
        },
        formatTime(time){
            let m = parseInt(time / 60);
            let s = time % 60;

            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            return m + ':' + s
        },
        getPlayId(id){
            let list = this.videoList
            list.forEach(item => {
                item.isPlay = false;
                if(item.id == id){
                    item.isPlay = true;
                }
            })
            this.videoList = list;
        },
        endPlayId(id){
            let list = this.videoList
            list.forEach(item => {
                if(item.id == id){
                    item.isPlay = false;
                }
            })
            this.videoList = list;
        },
        // 拉到底部监听
        handleScroll() {
          this.$nextTick(() => {
            if (this.$refs.video) {
              let ch = this.$refs.video.clientHeight;
              let st = this.$refs.video.scrollTop;
              let sh = this.$refs.video.scrollHeight;
              setTimeout(() => {
                if (ch + st == sh) {
                  if (this.videoList.length < 100 && this.canIGet) {
                    this.offset += 10;
                    this.getViedoList();
                  }
                }
              }, 300);
            }
          });
        },
    },
    created(){
        this.getViedoList();
    },
    mounted: function () {
      window.addEventListener("scroll", this.handleScroll, true);
    },
    destroyed: function () {
      window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="scss">
.video{
    height: calc(100vh - 60px);
    overflow-y: scroll;
}
.videoList{
    min-height: 100vh;
    background-color: #e6e6e6;
}
.loadingBox {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
::-webkit-scrollbar{
    display: none;
}
</style>