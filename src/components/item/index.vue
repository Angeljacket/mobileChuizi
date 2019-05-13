<template>
  <div class="item">
    <ItemTitle :data="data.spu"></ItemTitle>
    <div class="main">
      <div class="Box">
        <Banner :data="$store.state.goodsPic"></Banner>
      </div>
      <div class="Box">
        <Info :data="$store.state.goodsPic"></Info>
      </div>
      <div class="Box" @click="goodsShow(data.spu.sku_info)">
        <Deploy :data="$store.state.goodsPic"></Deploy>
      </div>
    </div>
    <div class="Box main">
      <Details :data="data.shop_info.tpl_content.base.images.ali_mobile.url[0]"></Details>
    </div>
    <div class="Boox main">
      <Parameter :data="cs"></Parameter>
    </div>
    <div class="Boox main">
      <Parameter :data="data"></Parameter>
    </div>
    <div class="goodsIfoBox" v-show="goodsOff">
      <ItemOption></ItemOption>
    </div>
    <div class="mark" @click="goodsHid" v-show="goodsOff"></div>
    <div class="buy">
      <router-link
        tag="div"
        class="car"
        to="/login"
      >
        <div class="goodsBox">
          {{goodsLeng}}
        </div>
        <i class="iconfont icon-gouwu"></i>
      </router-link>
      <div class="BtnBox" @click="buyGoods">
        购买
      </div>
    </div>
    <LoadIng v-show="$store.state.loadingOff"></LoadIng>
  </div>
</template>

<script>
import ItemTitle from './title'
import Banner from './banner'
import Info from './info'
import Deploy from './deploy'
import Details from './details'
import Parameter from './parameter'
import ItemOption from './itemOption'
export default {
  name: 'index',
  components: {
    ItemTitle,
    Banner,
    Info,
    Deploy,
    Details,
    Parameter,
    ItemOption
  },
  data () {
    return {
      data: {
        shop_info: {
          tpl_content: {
            base: {
              images: {
                ali_mobile: {
                  url: ['']
                },
                spec_params: {
                  url: ['']
                }
              }
            }
          }
        },
        spu: {
          name: '',
          shop_info: '',
          sku_info: [{}]
        }
      }
    }
  },
  methods: {
    goodsShow (data) {
      this.$store.commit('goodsOffFn', true)
      console.log(data)
    },
    goodsHid () {
      this.$store.commit('goodsOffFn', false)
    },
    buyGoods () {
      let off = this.$store.state.user.account
      if (off) {
        this.$store.commit('userUpadGoods')
      } else {
        alert('请先登录')
        this.$router.push('/login')
      }
    }
  },
  computed: {
    goods () {
      return this.$store.state.goods
    },
    goodsOff () {
      return this.$store.state.goodsOff
    },
    cs () {
      let data
      if (this.data.shop_info.tpl_content.base.images.spec_params) {
        data = this.data.shop_info.tpl_content.base.images.spec_params.url[0]
      } else if (this.data.shop_info.tpl_content.base.images.spec_params_mobile) {
        data = this.data.shop_info.tpl_content.base.images.spec_params_mobile.url[0]
      }
      return data
    },
    goodsLeng () {
      return this.$store.state.user.car.length
    }
  },
  created () {
    this.$store.commit('loadingFn', true)
    let id = this.$route.params.id
    let This = this
    // /chuizishopapi/product/skus?ids=${list.join(',')}&with_stock=true&with_spu=true
    this.axios.get(`/chuizishopapi/product/skus?ids=${id}&with_stock=true&with_spu=true`)
      .then(function (response) {
        This.$store.commit('goodsShow', response.data.data.list[0])
        This.$store.commit('Pic', response.data.data.list[0].spu.sku_info[0])
        This.$store.commit('loadingFn', false)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  watch: {
    goods (to) {
      this.data = to
      // console.log(to)
    }
  }
}
</script>

<style scoped>
.item{
  padding-top: 200px;
  background: #e4e4e4;
}
  .Box{
    margin-bottom: 18px;
  }
  .goodsIfoBox{
    position: fixed;
    width: 100%;
    bottom: 0px;
    z-index: 99999;
  }
  .mark{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
    z-index: 8888;
  }
  .buy{
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 120px;
    padding: 17px;
    background: #fff;
    box-sizing: border-box;
  }
  .car{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    position: relative;
  }
  .car i{
    font-size: 50px;
    color: #606060;
  }
  .goodsBox{
    position: absolute;
    right: 0;
    width: 35px;
    height: 35px;
    background: #ff4b5a;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    z-index: 20;
    text-align: center;
    line-height: 1.2;
    color: #fff;
  }
  .BtnBox{
    width: calc(100% - 80px);
    height: 100%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 40px;
    font-weight: 700;
    background: #ffd900;
    color: #fff;
    text-align: center;
    line-height: 2.2;
  }
</style>
