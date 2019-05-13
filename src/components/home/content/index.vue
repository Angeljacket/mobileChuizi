<template>
  <div class="Box">
    <GoodsTitle :title="data.floorName"></GoodsTitle>
    <div class="main" ref="wrapper">
      <ul>
        <li
          v-for="(item, index) in listFn(data)"
          :key="index"
          v-if="FindId(item).spu.sku_info[0].ali_image && index < 6"
          @click="show(item)"
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
      if (list.length) {
        ShowData = list.find(item => item.id === Number(id)) || ShowData
      }
      // console.log(ShowData)
      return ShowData
    },
    show (data) {
      this.$router.push('/item/' + data)
    }
  },
  computed: {
    qq () {
      return this.$store.state.listData
    }
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
    width: 100%;
    overflow: hidden;
  }
  .main ul{
    padding: 0 16px;
    position: relative;
    overflow: hidden;
  }
  ul{
    overflow: hidden;
  }
  li{
    width: calc(50% - 8px);
    margin-left: 16px;
    float: left;
    display: inline-block;
  }
  li:nth-child(odd){
    margin-left: 0;
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
