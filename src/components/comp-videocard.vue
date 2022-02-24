<template>
    <div class="videoCard">
        <div class="videoBox">
            <video :src="info.video" controls ref="video" @ended="playEnd">您的浏览器不支持 video 标签。</video>
            <div class="mask" :style="{backgroundImage: 'url(' + info.img + ')'}" @click="toPlay" v-if="!isPlay">
                <div class="title">{{info.title}}</div>
                <div class="time">{{info.time}}</div>
                <i class="bi bi-play-circle"></i>
            </div>
        </div>
        <div class="author">
            <div class="avatar">
                <img :src="info.avatar" alt="">
            </div>
            <div class="name">{{info.author}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isPlay: false
        }
    },
    props: ['info'],
    methods: {
        toPlay(){
            this.$emit('playId', this.info.id);
        },
        playEnd(){
            this.$emit('endPlayId', this.info.id);
        }
    },
    watch:{
        'info.isPlay'(val){
            if(this.info.video){
                let video = this.$refs.video;
                if(val){
                    this.isPlay = val;
                    video.play();
                } else {
                    this.isPlay = val;
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.videoCard{
    width: 100%;
    margin-bottom: 5px;

    .videoBox{
        display: flex;
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    video{
        width: 100%;
    }

    .mask{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: no-repeat center/cover;

        .title{
            font-size: 16px;
            color: #fff;
            padding: 10px 20px 0;
            box-sizing: border-box;
        }

        .time{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            line-height: 30px;
            height: 30px;
            font-size: 12px;
            color: #fff;
            text-align: right;
            padding: 0 20px;
            box-sizing: border-box;
            background-image: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.5));
        }

        i{
            color: #fff;
            font-size: 45px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .author{
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #fff;

        .name{
            font-size: 15px;
            color: #000;
        }
    }

    .avatar{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>