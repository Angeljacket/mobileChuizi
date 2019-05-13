<template>
  <div class="NumBox">
    <div class="titleBox">
      <h2>选择数量</h2>
    </div>
    <div class="Sum">
      <div class="btn jf" @click="Less">-</div>
      <span>{{$store.state.goodsSum}}</span>
      <div class="btn add" @click="add">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sum',
  methods: {
    Less () {
      this.$store.commit('goodsSumFn', -1)
    },
    add () {
      this.$store.commit('goodsSumFn', 1)
    }
  }
}
</script>

<style scoped>
  .titleBox{
    height: 83.312px;
    padding: 0 25px;
    font-size: 32px;
    line-height: 2.8;
    border-bottom: 1px solid #f2f2f2;
  }
  .Sum{
    display: flex;
  }
  .Sum{
    padding: 26.666px;
  }
  .Sum span{
    margin: 0 20px;
    font-size: 30px;
  }
  .Sum .btn{
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #eeeeee;
    text-align: center;
    font-size: 30px;
    box-shadow: 0 0 5px 5px rgba(0,0,0,.06);
  }
</style>
