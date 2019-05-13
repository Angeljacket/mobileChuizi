<template>
  <div class="user">
    <Title :data="title"></Title>
    <div class="main">
      <div class="userinof">
        <div class="userImg"></div>
        <div class="useraccount" v-if="user.account">
          {{user.account}}
        </div>
        <div class="userlogin" @click="login()" v-if="!user.account">
          登录/注册
        </div>
      </div>
      <ul>
        <router-link
          tag="li"
          to="/login"
        >
          <i class="iconfont icon-gouwu"></i>
          <p>购物车</p>
        </router-link>
        <router-link
          tag="li"
          to="/baylist"
        >
          <i class="iconfont icon-fahuo-"></i>
          <p>待收货</p>
        </router-link>
      </ul>
    </div>
    <div class="quit" v-if="user.account">
      <div class="quitBox" @click="quit()">
        退出登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      title: {
        title: '个人中心'
      },
      user: {}
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    quit () {
      this.$store.commit('userQuit')
      this.$router.go(0)
    }
  },
  created () {
    this.user = this.$store.state.user
  }
}
</script>

<style scoped>
  .user{
    padding: 120px 12.500px 0;
    background-image: url("../../assets/img/userBg.png");
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .main{
    background: #fff;
    padding: 30px;
  }
  .userinof{
    display: flex;
    align-items: center;
  }
  .userImg{
    width: 110.812px;
    height: 110.812px;
    background-image: url("../../assets/img/userImg.png");
    background-size: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 20px;
  }
  .useraccount{
    font-size: 34px;
    color: #333;
  }
  .userlogin{
    font-size: 34px;
    color: #333;
  }
  ul{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
  ul li{
    text-align: center;
  }
  li i{
    color: #d2d2d2;
    font-size: 34px;
    margin-bottom: 10px;
  }
  li p{
    color: #333;
    font-size: 24px;
  }
  .quit{
    position: fixed;
    width: 100%;
    height: 108px;
    bottom: 108px;
    left: 0;
    background: #fff;
    padding: 14px;
    box-sizing: border-box;
  }
  .quitBox{
    width: 100%;
    height: 100%;
    background: #dedede;
    text-align: center;
    line-height: 2.4;
    font-size: 30px;
    color: #fff;
  }
</style>
