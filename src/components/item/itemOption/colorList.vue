<template>
  <div class="colorList">
    <div class="titleBox">
      <h2>颜色选择</h2>
    </div>
    <div class="colorBox">
      <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          @click="pudaGoods(item, index)"
          :class="{show : index === p}"
        >
          <span>
            <img :src="item.spec_json[0].image" alt="">
          </span>
          <p>{{item.spec_json[0].show_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'colorList',
  props: ['data'],
  data () {
    return {
      p: 0
    }
  },
  methods: {
    pudaGoods (data, index) {
      this.$store.commit('Pic', data)
      this.p = index
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
  .colorBox{
    padding: 39.474px 25px 12.5px 25px;
    border-bottom: 1px solid #f2f2f2;
  }
  .colorBox ul{
    overflow: hidden;
  }
  .colorBox ul li{
    font-weight: 700;
    width: calc(31.3% + 2px);
    padding: 22.916px 0;
    text-align: center;
    box-sizing: border-box;
    float: left;
    margin-right: calc((100% - 31.3% * 3 - 6px) / 2);
    margin-bottom: 45px;
    border-radius: 15px;
    border: 2px solid #e5e5e5;
  }
  .colorBox ul li.show{
    border: 2px solid #6a8fe6;
  }
  .colorBox ul li:nth-child(3n){
    margin-right: 0;
  }
  .colorBox ul li span{
    display: block;
    width: 38.656px;
    height: 38.656px;
    margin: 0 auto 30px;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .colorBox ul li span img{
    width: 100%;
    height: 100%;
  }
  .colorBox ul li p{
    color: #333;
    font-size: 20px;
    line-height: 1;
  }
</style>
