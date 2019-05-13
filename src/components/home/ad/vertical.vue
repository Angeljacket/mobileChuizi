<template>
  <div class="Tpyestwo">
    <div class="peselection-l">
      <ul>
        <li
          v-for="(item, index) in listFn(data)"
          :key="index"
          v-if="index < 3"
        >
          <a href="">
            <img :src="img(item)" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="peselection-r">
      <a href="">
        <img  :src="img(data.dataList[3])" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vertical',
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
      if (data) {
        if (data.src) {
          img = data.src
        }
      }
      return img
    }
  }
}
</script>

<style scoped>
  .Tpyestwo{
    display: flex;
    justify-content: center;
    position: relative;
    padding: 20px 16px;
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
    margin-bottom: 6px;
    background: #fff;
  }
  .peselection-l{
    float: left;
    width: 50%;
  }
  .peselection-l li{
    line-height: 0;
    margin-bottom: 18px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.2);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .peselection-l li:last-child{
    margin-bottom: 0;
  }
  .peselection-l img{
    width: 100%;
  }
  .peselection-r{
    float: right;
    width: 50%;
    margin-left: 20px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.2);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
  .peselection-r a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .peselection-r img{
    width: 100%;
    height: 100%;
  }
</style>
