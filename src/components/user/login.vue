<template>
  <div class="login">
    <Title :data="title"></Title>
    <div class="shopping">
      <div class="GoodsList" v-if="goodslist !== 0">
        <GoodsList
          :data.sync="$store.state.user.car"
          btn="true"
        ></GoodsList>
      </div>
      <div class="GoodsClose">
        <Close v-if="goodslist !== 0"></Close>
      </div>
      <div class="shoppingBox">
        <div class="empty-container">
          <div class="dl"  v-if="!login">
            <div class="shoppingBg"></div>
            <h3>请先登录账号</h3>
            <p>添加到购物车的商品将会显示在这里</p>
            <router-link to="/Boarding" class="buy-dl" href="">登录</router-link>
            <router-link to="/registered" class="buy-zc" href="">注册</router-link>
          </div>
          <div class="empty" v-if="login && goodslist === 0">
            <div class="shoppingBg"></div>
            <h3>购物车暂无商品</h3>
            <p>添加到购物车的商品将会显示在这里</p>
            <router-link class="buy-btn" to="/">现在选购</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsList from './goodsList'
import Close from './close'
export default {
  name: 'login',
  components: {
    GoodsList,
    Close
  },
  data () {
    return {
      title: {
        sear: false,
        logo: false,
        title: '登录',
        goodsList: []
      },
      login: false,
      user: {}
    }
  },
  computed: {
    goodslist () {
      return this.$store.state.user.car.length
    }
  },
  created () {
    this.$store.commit('userFn')
    this.user = this.$store.state.user
    console.log(this.user)
    if (this.user.account) {
      this.login = true
    } else {
      this.login = false
    }
    // console.log(user.car)
  }
}
</script>

<style scoped>
  .shopping{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ededed;
    text-align: center;
  }
  .empty-container{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .empty-container h3{
    color: rgba(0,0,0,.15);
    margin: 25px 0 9px;
    font-size: 46px;
  }
  .empty-container p{
    font-size: 30px;
    text-align: center;
    color: rgba(0,0,0,.15);
  }
  .shoppingBg{
    display: inline-block;
    width: 88px;
    height: 114px;
    background-image: url("../../assets/img/shopping.png");
    background-repeat: no-repeat;
    background-size: 88px auto;
  }
  .buy-dl{
    display: inline-block;
    width: 284px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-weight: 700;
    color: rgba(0,0,0,.6);
    margin: 16px 10px 0;
    background: linear-gradient(rgba(0,0,0,.01),hsla(0,0%,100%,.01));
    box-shadow: inset 0 2px 4px hsla(0,0%,100%,.3);
    box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
    background: #5e8bdd;
    background: linear-gradient(#6f94e8,#5178df);
    border-radius: 6px;
    text-shadow: 0 -1px 0 rgba(0,0,0,.15);
    color: #fff;
  }
  .buy-zc{
    display: inline-block;
    position: relative;
    width: 284px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-weight: 700;
    color: rgba(0,0,0,.6);
    margin: 16px 1px 0;
    background: linear-gradient(rgba(0,0,0,.01),hsla(0,0%,100%,.01));
    box-shadow: inset 0 2px 4px hsla(0,0%,100%,.3);
    border: 2px solid rgba(0,0,0,.12);
    border-radius: 8px;
    text-align: center;
  }
  .buy-btn{
    display: inline-block;
    position: relative;
    width: 284px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-weight: 700;
    color: rgba(0,0,0,.6);
    margin: 16px 1px 0;
    background: linear-gradient(rgba(218, 213, 212, 0.15), hsla(0, 0%, 84%, 0.1));
    box-shadow: inset 0 2px 4px hsla(0,0%,100%,.3);
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 8px;
    text-align: center;
  }
  .GoodsList{
    padding-top: 120px;
  }
  .GoodsClose{
    position: fixed;
    width: 100%;
    height: 108px;
    bottom: 108px;
    z-index: 1;
  }
</style>
