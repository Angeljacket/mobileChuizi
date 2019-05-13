<template>
  <nav>
    <ul>
      <router-link
        tag="li"
        v-for="(item, index) in list"
        :key="index"
        :to="item.url"
        exact
      >
        <i class="iconfont" :class="item.class"></i><p>{{item.name}}</p>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      list: [
        {class: 'icon-shouye', name: '首页', url: '/'},
        {class: 'icon-fenlei', name: '分类', url: '/category'},
        {class: 'icon-gouwu', name: '购物车', url: '/login'},
        {class: 'icon-gerenzhongxin', name: '个人中心', url: '/user'}
      ]
    }
  }
}
</script>

<style scoped>
  nav{
    width: 100%;
    height: 108px;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 9999;
    background: #fff;
    box-shadow: 0 -11px 32px rgba(0,0,0,.08);
  }
  nav ul{
    width: 100%;
    overflow: hidden;
  }
  nav li{
    width: 25%;
    height: 100%;
    text-align: center;
    float: left;
  }
  nav li.is_show{
    background: linear-gradient(0deg,hsla(0,0%,100%,.05),rgba(0,0,0,.05));
    position: relative;
    box-shadow: inset 5px 0 3px -3px rgba(0,0,0,.01), inset -5px 0 3px -3px rgba(0,0,0,.01)
  }
  nav li.is_show i,nav li.is_show p{
    color: #666666;
  }
  nav li i{
    display: block;
    width: 100%;
    color: #d9d9d9;
    font-size: 42px;
    margin: 10px 0 6px;
  }
  nav li p{
    color: #9a9a9a;
    font-size: 54px;
    height: 40px;
    position: relative;
    width: 300%;
    left: -100%;
    line-height: 40px;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(.33333);
    transform: scale(.33333);
  }
</style>
