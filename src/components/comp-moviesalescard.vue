<template>
    <router-link class="movieCard" :to="'/movieinfo/' + citem.id + '/'">
        <div class="imgBox"><img :src="citem.img" alt=""></div>
        <div class="movieInfo">
            <h3 class="mname line-ellipsis">{{citem.nm}}</h3>
            <div class="mename line-ellipsis">{{citem.enm}}</div>
            <div class="mscore line-ellipsis" v-if="!isWish">{{ citem.sc + " "}}<span>{{ citem.snum + "人评"}}</span></div>
            <div class="mscore line-ellipsis" v-if="isWish">{{ citem.wish + " "}}<span>人想看</span></div>
            <div class="mtab line-ellipsis">{{citem.cat}}</div>
            <div class="marea line-ellipsis">{{citem.src}}/{{citem.dur}}分钟</div>
            <div class="mtime line-ellipsis">{{citem.pubDesc}}</div>
        </div>
        <div class="moreInfo"><i class="bi bi-chevron-right"></i></div>
    </router-link>
</template>

<script>
export default {
    data(){
        return{
            isWish: false,
        }
    },
    props: ['citem'],
    created(){
        if(this.citem.wish){
            this.isWish = true;
        }
        
    }
}
</script>


<style lang="scss" scoped>
@import "../assets/common/variable.scss";
.movieCard{
    position: relative;
    display: flex;
    padding: 15px;
    background-image: radial-gradient(circle, #7e7e7e, #6b6b6b, #595858, #474646, #363535);

    .imgBox{
        width: 110px;
        height: 150px;
        margin-right: 15px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .movieInfo{
        font-size: 12px;
        overflow-x: hidden;
        flex: 1;

        >div{
            color: #ccc;
            margin-top: 5px;
        }
    }

    .mname{
        font-size: 20px;
        color: #fff;
    }

    .mscore{
        font-size: 18px;
        font-weight: bold;
        color: $color4!important;

        >span{
            color: #ccc;
            font-size: 12px;
        }
    }

    .line-ellipsis{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .moreInfo{
        position: absolute;
        font-size: 16px;
        top: calc(50% - 21px / 2);
        right: 15px;
        color: #ccc;
    }
}

</style>
