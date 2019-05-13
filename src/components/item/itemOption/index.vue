<template>
  <div class="itemOption">
    <TitleBox
      :data="$store.state.goodsPic"
    ></TitleBox>
    <div class="optionBox" ref="wrapper">
      <div class="goodsBox">
        <ColorList
          :data="data"
        ></ColorList>
        <!--<Capacity></Capacity>-->
        <Sum></Sum>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBox from './TitleBox'
import ColorList from './colorList'
import Capacity from './capacity'
import Sum from './Sum'
import BScroll from 'better-scroll'
export default {
  name: 'index',
  components: {
    TitleBox,
    ColorList,
    Capacity,
    Sum
  },
  data () {
    return {
      data: {}
    }
  },
  computed: {
    item () {
      return this.$store.state.goods
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { // 初始化better-scroll
        probeType: 1, // 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        click: true // 是否派发click事件
      })
    })
  },
  watch: {
    item (to) {
      console.log(this.$store.state.goodsPic)
      this.data = to.spu.sku_info
      let arr = []
      let off = false
      // console.log(res.sku_info)
      for (var i = 0; i < this.data.length; i++) {
        if (arr.length === 0) {
          arr.push(this.data[i])
        } else {
          off = true
          for (var j = 0; j < arr.length; j++) {
            // console.log(res.sku_info[i].spec_json[0].image)
            if (arr[j].spec_json[0].image === this.data[i].spec_json[0].image) {
              off = false
            }
          }
          if (off) {
            arr.push(this.data[i])
          }
        }
      }
      this.data = arr
      console.log(this.data)
    }
  }
}
</script>

<style scoped>

  .optionBox{
    background: #fff;
    /*height: 885.188px;*/
    height: 700px;
    overflow: hidden;
  }
  .goodsBox{
    overflow: hidden;
  }
</style>
