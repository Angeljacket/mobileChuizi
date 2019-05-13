<template>
  <div class="Title">
    <div class="txt">
      <img src="../../assets/img/logo.png" alt="" v-if="data.logo">
      <h1 v-if="data.title">{{data.title}}</h1>
    </div>
    <div class="icon" v-if="data.sear">
      <i class="iconfont icon-gengduo"></i><i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['data']
}
</script>

<style scoped>
  .Title{
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
    color: #fff;
  }
  .txt{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .txt img{
    width: 50px;
  }
  .icon{
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
  }
  .icon i{
    position: absolute;
    top: calc(50% - 35px);
    font-size: 45px;
    color: #e4e4e4;
  }
  .icon-gengduo{
    left: 30px;
  }
  .icon-sousuo{
    right: 30px;
  }
  h1{
    font-size: 36px;
  }
</style>
