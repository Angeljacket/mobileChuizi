<template>
  <div class="cutNav">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
      >
        <img :src="item.src" alt="">
        <p>{{item.labelTitle}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data']
}
</script>

<style scoped>
  .cutNav{
    padding: 48px 0;
  }
  ul{
    margin: 0 16px;
    display: flex;
    justify-content: space-around;
  }
  li{
    text-align: center;
  }
  li img{
    width: 50px;
  }
</style>
