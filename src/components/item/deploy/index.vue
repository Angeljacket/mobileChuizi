<template>
  <div class="deploy">
    <h6>已选版本</h6>
    <div class="item-box">
      <p
        v-for="(item, index) in data.spec_json"
        :key="index"
      ><span>{{name(item)}}</span><span>{{item.show_name}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['data'],
  methods: {
    name (data) {
      let Name
      if (data.spec_value_id === '415' || data.spec_value_id === '237') {
        Name = '颜色：'
      } else if (data.spec_value_id === '260' || data.spec_value_id === '259') {
        Name = '容量：'
      } else if (data.spec_value_id === '36') {
        Name = '颜色：'
      } else if (data.spec_value_id === '122') {
        Name = '尺寸：'
      } else if (data.spec_value_id === '154') {
        Name = '款式：'
      } else if (data.spec_value_id === '344') {
        Name = '网络：'
      }
      return Name
    }
  }
}
</script>

<style scoped>
.deploy{
  background: #fff;
  padding: 20px 36.3px;
}
  h6{
    font-size: 28px;
    color: #999;
    margin-bottom: 12.5px;
  }
  .item-box p{
    font-size: 26px;
  }
  .item-box p{
    margin-bottom: 12.5px;
  }
  .item-box p span:last-child{
    font-weight: 700;
  }
</style>
