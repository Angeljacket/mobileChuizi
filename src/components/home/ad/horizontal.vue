<template>
  <div class="horizontal">
    <ul>
      <li
        v-for="(item, index) in listFn(data)"
        :key="index"
      >
        <img :src="img(item)" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'horizontal',
  props: ['data'],
  methods: {
    listFn (data) {
      let list
      if (data.dataList) {
        list = data.dataList
      }
      return list
    },
    img (data) {
      let img
      if (data.src) {
        img = data.src
      }
      return img
    }
  }
}
</script>

<style scoped>
  ul{
    overflow: hidden;
    padding: 16px;
  }
  li{
    width: calc(50% - 8px);
    margin-bottom: 16px;
    float: left;
    margin-left: 16px;
  }
  li:nth-child(odd){
    margin-left: 0;
  }
  li:nth-child(n+3){
    margin-bottom: 0;
  }
  img{
    width: 100%;
  }
</style>
