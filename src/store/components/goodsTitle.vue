<template>
  <div class="Title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'goodsTitle',
  props: ['title']
}
</script>

<style scoped>
.Title{
  width: 100%;
  height: 80px;
  padding: 0 25px;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  line-height: 2.4;
}
h2{
  font-size: 34px;
  color: #666;
}
</style>
