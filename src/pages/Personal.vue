<template>
    <div class="personal">
        <div class="myHeader">
            <div class="imgBox">
                <img class="img" :src="avatar" alt="">
            </div>
        </div>
        <div class="myOrder">
            <div class="title">我的订单</div>
            <div class="list">
                <div class="movie item">
                    <div class="imgBox">
                        <img class="img" :src="movieImg" alt="">
                    </div>
                    <div class="name">电影</div>
                </div>
                <div class="store item">
                    <div class="imgBox">
                        <img class="img" :src="storeImg" alt="">
                    </div>
                    <div class="name">商城</div>
                </div>
            </div>
        </div>
        <div class="myServe">
            <div class="serveList">
                <div class="coupon item">
                    <div class="name">优惠券</div>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <div class="membercard item">
                    <div class="name">折扣卡</div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            avatar: "https://img.meituan.net/maoyanuser/8b5a75c66ef4efb62fb695631b13419212452.png",
            movieImg: "https://s0.meituan.net/bs/myfe/canary/file/asgard/images/dpmmweb/mycenter/movie.png",
            storeImg: "https://s0.meituan.net/bs/myfe/canary/file/asgard/images/dpmmweb/mycenter/store.png",
        }
    }
}
</script>

<style lang="scss">
@import '../assets/common/variable.scss';
.personal{
    min-height: calc(100vh - 60px);
    width: 100%;
    background-color: #f4f4f4;
}

.myHeader{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    background-color: $bgColor;
    margin-bottom: 10px;

    .imgBox{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
    }

    .img{
        width: 100%;
        height: 100%;
    }
}

.myOrder{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;

    .title{
        align-self: center;
        font-size: 15px;
        padding: 15px 0;
    }

    .list{
        display: flex;
        justify-content: space-around;

        .item{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .imgBox{
        width: 45px;
        height: 45px;
        margin: 5px 0 10px;
    }

    .img{
        width: 100%;
        height: 100%;
    }

    .name{
        font-size: 15px;
        margin-bottom: 20px;
    }
}

.myServe{
    background-color: #fff;

    .serveList{
        margin: 0 15px;
    }

    .item{
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        font-size: 15px;
        box-sizing: border-box;
    }

    .item:not(:last-child){
        border-bottom: 1px solid $borderColor;
    }

    .name{
        color: #000;
    }

    i{
        color: #ccc;
    }
}
</style>