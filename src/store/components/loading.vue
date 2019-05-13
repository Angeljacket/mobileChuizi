<template>
  <div class="login">
    <div class="loginShow"></div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
  .login{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background: rgb(255,255,255);
  }
  .loginShow{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    background-image: url("../../assets/img/loading.png");
    background-size: 100%;
    animation: rotate 1s linear infinite;
  }
  @keyframes rotate{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
