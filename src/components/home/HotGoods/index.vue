<template>
  <div class="Box">
    <GoodsTitle :title="data.floorName"></GoodsTitle>
    <div class="main" ref="wrapper">
      <ul>
        <li
          v-for="(item, index) in listFn(data)"
          :key="index"
          @click="itemShow(item)"
        >
          <div class="imgBox">
            <img :src="FindId(item).spu.sku_info[0].ali_image" alt="">
          </div>
          <div class="txt">
            <h3 class="one-txt-cut">{{FindId(item).spu.sku_info[0].title}}</h3>
            <p class="one-txt-cut ms">{{FindId(item).spu.sku_info[0].sub_title}}</p>
            <p><span class="one-txt-cut pic">{{FindId(item).spu.sku_info[0].price}}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index',
  props: ['data'],
  data () {
    return {
      list: []
    }
  },
  methods: {
    listFn (data) {
      let list
      if (data.dataList) {
        list = data.dataList
      }
      return list
    },
    FindId (id) {
      let ShowData = {
        name: '载入中',
        spu: {
          sku_info: [
            {
              ali_image: ''
            }
          ]
        }
      }
      let list = this.list
      // for (var i = 0; i < list.length; i++) {
      //   console.log(list[i].id)
      // }
      if (list.length) {
        ShowData = list.find(item => item.id === Number(id)) || ShowData
      }
      // console.log(ShowData)
      return ShowData
    },
    itemShow (data) {
      // console.log(data)
      this.$router.push('/item/' + data)
    }
  },
  computed: {
    qq () {
      return this.$store.state.listData
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { // 初始化better-scroll
        probeType: 1, // 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        click: true, // 是否派发click事件
        scrollX: true
      })
    })
  },
  watch: {
    qq (to) {
      // console.log(to)
      this.list = to
    }
  }
}
</script>

<style scoped>
  .Box{
    overflow: hidden;
  }
  .main{
    margin-top: 40px;
    display: -webkit-box;
    width: 100%;
    overflow: hidden;
  }
  .main ul{
    display: flex;
    position: relative;
    overflow: hidden;
  }
  ul{
    overflow: hidden;
  }
  li{
    width: 256px;
    float: left;
    display: inline-block;
    margin: 0 8px;
  }
  .imgBox{
    border: 2px solid #f2f2f2;
    border-radius: 15px;
  }
  .txt{
    padding: 17px 15px 36px 15px;
  }
  .txt h3{
    font-size: 26px;
  }
  .txt p.ms{
    font-size: 24px;
  }
  .ms{
    transform: scale(.77);
    transform-origin: 0 50%;
  }
  .pic{
    color: #d44d44;
    font-weight: 700;
  }
</style>
