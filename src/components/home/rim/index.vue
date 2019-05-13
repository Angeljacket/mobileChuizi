<template>
  <div class="rim">
    <GoodsTitle title="周边"></GoodsTitle>
    <div class="TypesFour">
      <ul>
        <li
          v-for="(item, index) in listFn(data)"
          :key="index"
          v-if="index < 5"
          @click="show(item)"
        >
          <div class="ImgBox">
            <img :src="FindId(item).sku_info[0].ali_image || FindId(item).sku_info[0].ali_image" alt="">
          </div>
          <div class="box-item-content">
            <h5>{{FindId(item).sku_info[0].title}}</h5>
            <p>{{FindId(item).sku_info[0].sub_title}}</p>
            <div class="attr-container">
              <!--<ul class="style-label">-->
              <!--<li>-->
              <!--<span>长袖</span>-->
              <!--</li>-->
              <!--</ul>-->
              <ul class="color-switch">
                <li
                  v-for="(btn, j) in qc(FindId(item))"
                  :key="j"
                  :style="'background-image: url('+btn+')'"
                >
                </li>
              </ul>
            </div>
            <!--<div class="price-container">-->
            <!--<p>{{item.spu.sku_info[0].price}}</p>-->
            <!--</div>-->
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
              ali_image: '',
              spec_json: [
                {spec_json: [{ali_image: ''}]}
              ]
            }
          ]
        }
      }
      let list = this.list
      if (list.length) {
        ShowData = list.find(item => item.id === Number(id))
      }
      if (!ShowData) {
        ShowData = {
          name: '载入中',
          spu: {
            sku_info: [
              {
                ali_image: '',
                spec_json: [
                  {spec_json: [{ali_image: ''}]}
                ]
              }
            ]
          }
        }
      }
      // console.log(ShowData)
      return ShowData.spu || ShowData
    },
    qc (res) {
      // console.log(res)
      let arr = []
      let off = false
      // console.log(res.sku_info)
      for (var i = 0; i < res.sku_info.length; i++) {
        if (arr.length === 0) {
          arr.push(res.sku_info[i].spec_json[0].image)
        } else {
          off = true
          for (var j = 0; j < arr.length; j++) {
            // console.log(res.sku_info[i].spec_json[0].image)
            if (arr[j] === res.sku_info[i].spec_json[0].image) {
              off = false
            }
          }
          if (off) {
            arr.push(res.sku_info[i].spec_json[0].image)
          }
        }
      }
      return arr
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
      this.list = to
    }
  }
}
</script>

<style scoped>
  .TypesFour{
    background: #fff;
  }
  .TypesFour li{
    display: -webkit-box;
    position: relative;
    align-items: center;
  }
  .ImgBox{
    width: 253px;
    overflow: hidden;
  }
  .TypesFour li img{
    width: 100%;
    box-sizing: border-box;
  }
  .box-item-content{
    position: relative;
    overflow: hidden;
  }
  .box-item-content h5{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    font-size: 24px;
    color: #333;
  }
  .box-item-content p{
    color: #7f7f7f;
    font-size: 24px;
    line-height: 1.2;
    overflow-x: hidden;
    margin: .3rem 0 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-transform: scale(.83333);
    transform: scale(.83333);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  .attr-container{
  }
  .style-label{
    padding-top: .25rem;
    margin: -.05rem 0;
    display: flex;
    flex-flow: row wrap;
  }
  .style-label li{
    background: #e5efff;
    border-radius: .1rem;
    padding: 2px .3rem;
    margin: .05rem .1rem;
    color: #3965cc;
    font-size: .4rem;
    font-weight: 700;
    line-height: 1;
    position: relative;
  }
  .style-label li span {
    position: relative;
    display: block;
    line-height: 1;
    white-space: nowrap;
  }
  .color-switch{
    font-size: 0;
    margin-top: .4rem;
  }
  .color-switch li{
    width: 18px;
    height: 18px;
    display: inline-block;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: #c20428;
    background-size: 100%;
    background-origin: border-box;
    background-clip: content-box;
    border: 1px solid rgba(0,0,0,.2);
    padding: 2px;
    margin-right: 5px;
    background-image: url("https://resource.smartisan.com/resource/90fc63e55a4b486b1f6519f86f8d75ed.jpg");
  }
  .color-switch li img{
    width: 100%;
    height: 100%;
  }
  .price-container p{
    color: #d44d44;
    display: inline-block;
    white-space: nowrap;
    font-weight: 700;
  }
</style>
