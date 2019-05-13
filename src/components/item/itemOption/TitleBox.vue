<template>
  <div class="TitleBox">
    <div class="imgBox">
      <img :src="data.ali_image" alt="">
    </div>
    <div class="info">
      <h4>{{data.title}}</h4>
      <p>
        <span
          v-for="(item, index) in data.spec_json"
          :key="index"
        >{{item.show_name}}</span>
      </p>
      <div class="picbox">
        <span>¥</span><span class="pic">{{data.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBox',
  props: ['data'],
  methods: {
  },
  watch: {
    data (to) {
      console.log(to)
    }
  }
}
</script>

<style scoped>
  .itemOption{
    width: 100%;
    height: 924.968px;
  }
  .TitleBox{
    display: flex;
    position: relative;
    width: 100%;
    height: 225px;
    box-shadow: 0 5px 13px rgba(0,0,0,.12);
    background: #f7f7f7;
    background-image: linear-gradient(#fefefe,#f6f6f6);
    flex-shrink: 0;
  }
  .imgBox{
    display: inline-block;
    position: relative;
    top: -50px;
    width: 179.146px;
    height: 179.146px;
    margin: 25px;
    padding: 20.834px;
    background: #fff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .info{
    margin: 33.334px 25px 33.334px 8.334px;
  }
  .imgBox img{
    width: 100%;
  }
  .info h4{
    margin-bottom: 10.666px;
    font-size: 33px;
    color: #333;
  }
  .info p{
    margin-bottom: 16.666px;
    color: #7f7f7f;
    font-size: 26px;
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
</style>
