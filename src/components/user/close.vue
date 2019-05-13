<template>
  <div class="closeBox">
    <div class="len">已选<span>{{len.length}}</span>件</div>
    <div class="pic">合计：<i>¥</i><span>{{pic}}</span></div>
    <div
      class="picjs"
      :class="{show : len.length}"
      @click="buy()"
    >现在结算</div>
  </div>
</template>

<script>
export default {
  name: 'close',
  data () {
    return {
      len: []
    }
  },
  methods: {
    buy () {
      if (this.len.length !== 0) {
        this.$store.commit('buyList')
      } else {
        alert('请选择一件以上的产品')
      }
    }
  },
  computed: {
    btnShow () {
      return this.$store.state.user
    },
    pic () {
      return this.len.reduce((n, item) => n + Number(item.price) * Number(item.sum), 0)
    }
  },
  watch: {
    btnShow: {
      handler (to) {
        this.len = to.car.filter(itme => itme.off)
        console.log(this.len)
      },
      deep: true // 深度监控开启，deep不能改写。
    }
  },
  created () {
    this.len = this.$store.state.user.car.filter(itme => itme.off)
    console.log(this.len)
  }
}
</script>

<style scoped>
  .closeBox{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fafafa;
    box-shadow: 0 -0.2rem 1rem rgba(0,0,0,.1);
  }
  .len{
    font-size: 28px;
    color: #999;
  }
  .len span{
    font-size: 32px;
    font-weight: 700;
    margin: 0 10px;
  }
  .pic{
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }
  .pic i{
    color: #d44d44;
    margin: 0 4px;
  }
  .pic span{
    color: #d44d44;
  }
  .picjs{
    width: 220px;
    height: 80px;
    background: #a9a9a9;
    background: linear-gradient(#bfbfbf,#999);
    border-radius: 12px;
    color: #fff;
    line-height: 2.8;
    font-weight: 700;
    font-size: 28px;
  }
  .picjs.show{
    background: #5e8bdd;
    background: linear-gradient(#6f94e8,#5178df);
  }
</style>
