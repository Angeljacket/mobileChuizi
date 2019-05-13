<template>
  <div class="TypeThrss">
    <div class="boxTitle">
      <GoodsTitle :title="data.name"></GoodsTitle>
    </div>
    <div class="TypeShowimgBox">
      <a href=""><img :src="data.image.src" alt=""></a>
    </div>
    <div class="ThreeBox">
      <ul>
        <li
          v-for="(item, ind) in data.layout.dataList"
          :key="ind"
          @click="show(item)"
        >
          <a href="Javasrcitp::;">
            <img :src="jk(item.sku).sku_info[0].ali_image || jk(item.sku).name" alt="">
            <span>{{jk(item.sku).name}}</span>
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
      this.$router.push('/item/' + data.sku)
    }
  }
}
</script>

<style scoped>
  .ThreeBox {
    overflow: hidden;
  }
  .ThreeBox li{
    width: 50%;
    border-top: 1px solid #f1f1f1;
    float: left;
  }
  .ThreeBox li:nth-child(odd){
    width: calc(50% - 1px);
    border-right: 1px solid #f1f1f1;
  }
  .TypeShowimgBox{
    padding: 25px;
  }
  .ThreeBox li a{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    height: 3rem;
  }
  .ThreeBox li a img{
    flex: 0 0 auto;
    height: 75px;
    width: 75px;
    margin: 0 15px;
  }
  .ThreeBox li a span{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 1.2;
    font-size: 18px;
    font-weight: 700;
    color: #666;
    white-space: nowrap;
    padding-right: 20px;
  }
</style>
