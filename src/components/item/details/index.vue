<template>
  <div class="details">
    <GoodsTitle title="商品详情"></GoodsTitle>
    <img :src="data" alt="">
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data']
}
</script>

<style scoped>
  .details{
    background: #fff;
  }
</style>
