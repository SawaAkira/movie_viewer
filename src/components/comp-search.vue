<template>
    <div class="searchBox">
        <div class="inputBox">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="搜电影、搜影院" v-model="inputData">
            <i class="bi bi-x-circle-fill" v-if="inputData" @click="inputData='';"></i>
        </div>
        <router-link to="/" class="cancel">取消</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputData: "",
            isInput: true,
            d: null,
        }
    },
    watch: {
        inputData(val){
            clearTimeout(this.d);
            if(!this.isInput){
                this.isInput = !this.isInput;
            }
            this.d = setTimeout(() => {
                this.$emit('input-data', val)
                this.isInput = true;
            },300)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/common/variable.scss';
.searchBox{
    display: flex;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid $borderColor;
    box-sizing: border-box;

    .inputBox{
        background-color: #fff;
        flex: 1;
        padding: 0 30px;
        border: 1px solid $borderColor;
        border-radius: 4px;
        position: relative;

        i{
            font-size: 14px;
            position: absolute;
            
            color: $color;
        }

        i:first-child{
            left: 8px;
            top: calc(50% - 19px / 2);
        }

        i:last-child{
            right: 8px;
            top: calc(50% - 19px / 2);
        }   
    }

    input{
        display: block;
        font-size: 14px;
        margin: 0;
        padding: 7px 0;
        border: none;
        box-sizing: border-box;
        width: 100%;
    }

    .cancel{
        font-size: 16px;
        width: 60px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: $color;
    }
}
</style>