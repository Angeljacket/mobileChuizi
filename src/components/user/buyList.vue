<template>
  <div class="bayList">
    <Title :data="title"></Title>
    <div class="main">
      <GoodsList
        :data="user.goods"
      ></GoodsList>
    </div>
  </div>
</template>

<script>
import GoodsList from './goodsList'
export default {
  name: 'buyList',
  components: {
    GoodsList
  },
  data () {
    return {
      title: {
        title: '待收货'
      },
      user: {}
    }
  },
  created () {
    this.$store.commit('userFn')
    this.user = this.$store.state.user
    console.log(this.user)
  }
}
</script>

<style scoped>
.main{
  padding-top: 100px;
}
</style>
