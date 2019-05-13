<template>
  <div class="Title">
    <div class="txt">
      <h1>{{data.title || data.name}}</h1>
    </div>
    <nav>
      <ul>
        <li
          v-for="(item, index) in nav"
          :key="index"
          @click="show(index)"
          :class="{show : index === p}"
        >{{item}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data'],
  data () {
    return {
      nav: [
        '商品',
        '详情',
        '参数',
        '推荐'
      ],
      thisTop: 0,
      p: 0
    }
  },
  methods: {
    show (index) {
      let list = this.$store.state.carTop
      let time = null
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > list[index]) {
        time = setInterval(() => {
          if (scrollTop > list[index]) {
            scrollTop -= this.$store.state.scroll
            window.scrollTo(scrollTop, scrollTop)
            // console.log(scrollTop)
            if (scrollTop < list[index]) {
              window.scrollTo(list[index] - 50, list[index] - 50)
              clearInterval(time)
            }
          }
        }, 20)
      } else {
        time = setInterval(() => {
          if (scrollTop < list[index]) {
            scrollTop += this.$store.state.scroll
            window.scrollTo(scrollTop, scrollTop)
            // console.log(scrollTop)
            if (scrollTop > list[index]) {
              window.scrollTo(list[index] - 50, list[index] - 50)
              clearInterval(time)
            }
          }
        }, 20)
      }
    }
  },
  updated () {
    let This = this
    let len = document.getElementsByClassName('main')
    let list = []
    for (var i = 0; i < len.length; i++) {
      list.push(len[i].offsetTop)
    }
    list[0] = 0
    this.$store.commit('carTopFn', list)
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      for (var i = 0; i < list.length; i++) {
        if (list[i] <= t + 100 && list[i + 1] >= t) {
          This.p = i
        }
      }
    }
  }
}
</script>

<style scoped>
  .Title{
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
    color: #fff;
  }
  .txt{
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .txt img{
    width: 50px;
  }
  .icon i{
    position: absolute;
    top: calc(50% - 35px);
    font-size: 45px;
    color: #e4e4e4;
  }
  h1{
    font-size: 36px;
  }
  nav{
    padding: 18px 15px;
    background: #f2f2f2;
    -webkit-box-shadow: 0 5px 13px rgba(0,0,0,.12);
    box-shadow: 0 10px 20px rgba(0,0,0,.12);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  nav ul{
    display: flex;
    justify-content: center;
    border: 2px solid #d4d4d4;
    border-radius: 10px;
  }
  nav li{
    width: 25%;
    text-align: center;
    color: #606060;
    font-size: 28px;
    font-weight: 700;
    padding: 10px 0;
  }
  nav li.show{
    background: #bfbfbf;
    background-image: linear-gradient(#aeaeae,#b3b3b3);
    box-shadow: inset 0 1px 3px rgba(0,0,0,.15);
    color: #fff;
  }
</style>
