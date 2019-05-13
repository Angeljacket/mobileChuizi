<template>
  <div class="info">
    <GoodsTitle title="产品信息"></GoodsTitle>
    <div class="Txt">
      <h4 class="one-txt-cut">{{data.title}}</h4>
      <p class="one-txt-cut">{{data.sub_title}}</p>
      <div class="picbox">
        <span>¥</span><span class="pic">{{data.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data', 'pic']
}
</script>

<style scoped>
  .info{
    background: #fff;
  }
  .picbox span{
    font-size: 26px;
    color: #d44d44;
    font-weight: 700;
  }
  .picbox .pic{
    margin-left: 6px;
    font-size: 34px;
  }
  .Txt{
    padding: 33.334px 36.3px;
  }
  .Txt h4{
    margin-bottom: 16.666px;
    font-size: 33px;
    color: #333;
  }
  .Txt p{
    margin-bottom: 16.666px;
    color: #7f7f7f;
    font-size: 26px;
  }
</style>
