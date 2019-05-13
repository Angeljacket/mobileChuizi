<template>
  <div class="capacity">
    <div class="titleBox">
      <h2>容量</h2>
    </div>
    <div class="column">
      <ul>
        <li>
          <p>4G + 64GB</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'capacity'
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
  .column{
    padding: 39.474px 25px 6.250px;
  }
  .column ul{
    overflow: hidden;
  }
  .column ul li{
    float: left;
    font-weight: 700;
    padding: 19.792px;
    margin: 0 20.344px 25px 0;
    border: 2px solid #e5e5e5;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .column ul li.show{
    border: 2px solid #6a8fe6;
  }
  .column ul li p{
    font-size: 26px;
    color: #666;
  }
</style>
