<template>
  <div class="topMajor">
    <GoodsTitle :title="data.name"></GoodsTitle>
    <div class="TypeShowimgBox">
      <a href="">
        <img :src="data.image.src" alt="">
      </a>
    </div>
    <div class="listShow">
      <ul>
        <li
          v-for="(item, index) in data.layout.dataList"
          :key="index"
          @click="show(item)"
        >
          <a href="Javasrcitp::;">
            <img :src="jk(item.sku).sku_info[0].ali_image || jk(item.sku).name" alt="">
            <span class="title">{{jk(item.sku).name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data'],
  methods: {
    jk (id) {
      let ShowData = {
        name: '载入中',
        sku_info: [
          {
            ali_image: ''
          }
        ]
      }
      for (let k in this.$store.state.classification) {
        if (this.$store.state.classification[k].id === Number(id)) {
          ShowData = this.$store.state.classification[k]
          // console.log(ShowData.spu)
        }
      }
      return ShowData.spu || ShowData
    },
    show (data) {
      console.log(data)
      this.$router.push('/item/' + data.sku)
    }
  }
}
</script>

<style scoped>
  .listShow ul{
    overflow: hidden;
  }
  .listShow li{
    position: relative;
    border-top: 1px solid #f1f1f1;
  }
  .listShow li:first-child{
    border-top: 0;
  }
  .TypeShowimgBox{
    padding: 25px;
    border-bottom: 1px solid #f2f2f2;
  }
  .listShow li a{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding: 25px 0;
  }
  .listShow li a img{
    width: 75px;
    height: 75px;
    margin: 0 15px;
    flex: 0 0 auto;
  }
  .listShow li a .title{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 1.2;
    font-size: 18px;
    font-weight: 700;
    color: rgba(0,0,0,.8);
    white-space: nowrap;
  }
</style>
