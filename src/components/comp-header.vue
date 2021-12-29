<template>
  <div class="header">
    <div class="header-box">
      <div class="logo"></div>
      <div class="text"><slot></slot></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/common/variable.scss';
  .header{
    position: relative;
    width: 100%;
    height: 60px;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 2px solid $borderColor;
    background-color: #fff;

    .header-box{
      display: flex;
      align-items: center;
      height: 100%;
    }

    .logo{
      width: 40px;
      height: 40px;
      background: url(../assets/logo.png) no-repeat 0 0/cover;
    }

    .text{
      font-size: 24px;
      color: $color;
      letter-spacing: 5px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
</style>
