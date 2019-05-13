<template>
  <div class="multimap">
    <GoodsTitle :title="data.name"></GoodsTitle>
    <div class="TypeShowimgBox">
      <a href="">
        <img :src="data.image.src" alt="">
      </a>
    </div>
    <div class="TowShow">
      <ul>
        <router-link
          tag="li"
          v-for="(item, ind) in data.layout.dataList"
          :key="ind"
          @click="show(item)"
        >
          <a href="">
            <div class="peImgBox">
              <img :src="jk(item.sku).sku_info[0].ali_image || jk(item.sku).name" alt="">
            </div>
            <span>{{jk(item.sku).name}}</span>
          </a>
        </router-link>
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
  .TypeShowimgBox{
    padding: 25px;
  }
  .TowShow ul{
    overflow: hidden;
    padding: 25px 25px 0 25px;
    border-top: 1px solid #f0f0f0;
  }
  .TowShow li{
    width: 32%;
    float: left;
    margin-right: 2%;
  }
  .TowShow li a{
    display: block;
  }
  .TowShow li .peImgBox{
    width: 100%;
    border: 1px solid #f0f0f0;
    text-align: center;
    padding: 52px 0 ;
  }
  .TowShow li:nth-child(3n){
    margin-right: 0;
  }
  .TowShow li img{
    width: 50%;
  }
  .TowShow li span{
    display: block;
    width: 120%;
    font-size: 14px;
    margin: 12.5px 0 33.5px 0;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    color: rgba(0,0,0,.8);
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-transform: scale(.83333);
    transform: scale(.83333);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
</style>
