<template>
  <div class="Banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img :src="data.ali_image" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  props: ['data'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // notNextTick: true,
        // 循环
        // loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        // autoplay: true,
        // autoplay: {
        //     delay: 3000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: true,
        // },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        // grabCursor : true,
        // 滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
.Banner{
  text-align: center;
  background: #fff;
}
img{
  width: 80%;
}
</style>
