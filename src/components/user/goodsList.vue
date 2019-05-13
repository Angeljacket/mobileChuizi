<template>
  <ul>
    <li
      v-for="(item, index) in data"
      :key="index"
    >
      <div
        class="cartinput"
        :class="{show : item.off}"
        @click="opengBtn(item)"
        v-if="btn"
      ></div>
      <div class="cartwrapper">
        <div class="ImgBox">
          <img :src="item.ali_image" alt="">
        </div>
        <div class="TextBox">
          <h4>{{item.title}}</h4>
          <p><span
            v-for="(item, index) in item.spec_json"
            :key="index"
          >{{item.show_name}}</span></p>
          <div class="picBox">
            <span class="pic">¥{{item.price * item.sum}}</span>
            <span>X{{item.sum}}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'goodsList',
  props: ['data', 'btn'],
  methods: {
    opengBtn (data) {
      data.off = !data.off
    }
  }
}
</script>

<style scoped>
  li{
    display: flex;
    margin-bottom: 20px;
    background: #fff;
    align-items: center;
  }
  .cartinput{
    width: 45px;
    height: 45px;
    border: 2px solid rgba(0,0,0,.1);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin:0 20px;
  }
  .cartinput.show{
    border: 2px solid transparent;
    background-image: url("../../assets/img/btn.png");
    background-size: 114%;
    background-position: top;
  }
  .cartwrapper{
    width: calc(100% - 90px);
    display: flex;
    align-items: center;
  }
  .ImgBox{
    width: 180px;
    height: 180px;
    overflow: hidden;
  }
  .ImgBox img{
    width: 100%;
  }
  .TextBox{
    text-align: left;
  }
  .TextBox h4{
    font-size: 28px;
  }
  .TextBox p{
    margin: 10px 0;
    color: #7f7f7f;
  }
  .pic{
    font-weight: 700;
    color: #d44d44;
  }
</style>
