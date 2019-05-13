<template>
  <div id="home">
    <Title :data="title"></Title>
    <div class="Box" ref="wrapper" :style="heipx">
      <div class="bscroll">
        <div class="section">
          <Banner :data="data.banner.dataList"></Banner>
          <CutNav :data="data.shortcut.dataList"></CutNav>
        </div>
        <div class="section"
             v-for="(item, index) in data.floors"
             :key="index"
        >
          <HotGoods
            v-if="item.type === 'productLayoutSlideX'"
            :data="item"
          ></HotGoods>
          <Vertical
            v-if="item.type === 'adLayoutTwoThree'"
            :data="item"
          ></Vertical>
          <Content
            v-if="item.type === 'productLayoutOneTwo'"
            :data="item"
          ></Content>
          <Rim
            v-if="item.type === 'productLayoutOneOne'"
            :data="item"
          ></Rim>
          <Horizontal
            v-if="item.type === 'adLayoutTwoTwo'"
            :data="item"
          ></Horizontal>
        </div>
      </div>
    </div>
    <LoadIng v-show="$store.state.loadingOff"></LoadIng>
  </div>
</template>

<script>
import Banner from './banner'
import CutNav from './cutNav'
import HotGoods from './HotGoods'
import Vertical from './ad/vertical'
import Horizontal from './ad/horizontal'
import Content from './content'
import Rim from './rim'
import BScroll from 'better-scroll'
export default {
  name: 'index',
  components: {
    Banner,
    CutNav,
    HotGoods,
    Vertical,
    Horizontal,
    Content,
    Rim
  },
  data () {
    return {
      title: {
        logo: true,
        sear: true
      },
      data: {
        banner: {
          dataList: {}
        },
        floors: [
          {src: ''}
        ],
        shortcut: {
          dataList: {}
        }
      },
      heipx: 0
    }
  },
  methods: {
    hei () {
      let Box = document.getElementsByClassName('Box')[0].offsetTop
      let scrollTop = document.documentElement.clientHeight
      this.heipx = 'height:' + (scrollTop - Box - 100) + 'px'
      console.log(this.heipx)
    }
  },
  created () {
    let This = this
    let list = []
    this.$store.commit('loadingFn', true)
    this.axios.get('/chuiziapi/marketing/mobile/index_a99c57b949312d7bfc58e7a9bc56fdd8.json')
      .then(function (response) {
        This.data = response.data
        for (var k in response.data.floors) {
          // console.log(data.floors[k])
          if (response.data.floors[k].lowerLimit && response.data.floors[k].type !== 'adLayoutOneTwo' && response.data.floors[k].type !== 'adLayoutTwoTwo') {
            for (var key in response.data.floors[k].dataList) {
              list.push(response.data.floors[k].dataList[key])
            }
          }
        }
        // /chuizishopapi/product/skus?ids=${list.join(',')&with_stock=true&with_spu=true}
        This.axios.get(`/chuizishopapi/product/skus?ids=${list.join(',')}&with_stock=true&with_spu=true`)
          .then(function (response) {
            console.log(response.data.data.list)
            This.$store.commit('listTh', response.data.data.list)
            This.$store.commit('loadingFn', false)
          })
          .catch(function (error) {
            console.log(error)
          })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  mounted () {
    this.hei()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { // 初始化better-scroll
        probeType: 1, // 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        click: true // 是否派发click事件
      })
    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 100px;
  background: #e8e8e8;
  overflow: hidden;
}
.section{
  width: 100%;
  margin-bottom: 16px;
  background: #fff;
}
</style>
