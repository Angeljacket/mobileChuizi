<template>
  <div id="category">
    <Title :data="title"></Title>
    <div class="sbcroll" ref="wrapper" :style="heipx">
      <div class="sbcrollShow">
        <div class="Box"
             v-for="(item, index) in list"
             :key="index"
        >
          <TopoMajor
            v-if="item.layout.type === 'productLayoutCategoryOneOne'"
            :data="item"
          ></TopoMajor>
          <Fitting
            v-if="item.layout.type === 'productLayoutCategoryOneTwo'"
            :data="item"
          ></Fitting>
          <MultiMap
            v-if="item.layout.type === 'productLayoutCategoryOneThree '"
            :data="item"
          ></MultiMap>
        </div>
      </div>
    </div>
    <LoadIng v-show="$store.state.loadingOff"></LoadIng>
  </div>
</template>

<script>
import TopoMajor from './topMajor'
import Fitting from './fitting'
import MultiMap from './multiMap'
import BScroll from 'better-scroll'
export default {
  name: 'index',
  components: {
    TopoMajor,
    Fitting,
    MultiMap
  },
  data () {
    return {
      title: {
        logo: false,
        sear: true,
        title: '分类'
      },
      list: [],
      heipx: 0
    }
  },
  methods: {
    hei () {
      let Box = document.getElementsByClassName('sbcroll')[0].offsetTop
      let scrollTop = document.documentElement.clientHeight
      this.heipx = 'height:' + (scrollTop - Box) + 'px'
      console.log(this.heipx)
    }
  },
  created () {
    let This = this
    this.$store.commit('loadingFn', true)
    this.axios.get('/chuiziapi/marketing/mobile/category_e9b7b80b27637dde71a4fb7f6eb90296.json')
      .then(function (response) {
        console.log(response.data)
        let list = []
        This.list = response.data
        for (var k in response.data) {
          for (var key in response.data[k].layout.dataList) {
            list.push(response.data[k].layout.dataList[key].sku)
          }
        }
        // /chuizishopapi/product/skus?ids=${list.join(',')}&with_stock=true&with_spu=true
        This.axios.get(`/chuizishopapi/product/skus?ids=${list.join(',')}&with_stock=true&with_spu=true`)
          .then(function (response) {
            console.log(response.data.data.list)
            This.$store.commit('classTh', response.data.data.list)
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
  #category{
    padding-top: 100px;
  }
  .Box{
    margin-bottom: 12px;
  }
  .sbcrollShow{
    padding-bottom: 50px;
  }
</style>
