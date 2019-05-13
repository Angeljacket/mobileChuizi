<template>
  <div class="log">
    <Title :data="title"></Title>
    <div class="ng-scope">
      <form @submit.prevent="submit">
        <div class="zhBox">
          <ul>
            <li><input type="text" v-model="account_number.account" placeholder="账号"/></li>
            <li><input type="text" v-model="account_number.password" placeholder="密码"/></li>
          </ul>
          <div class="zddl">
          </div>
          <div class="logBox">
            <input type="submit" value="登录"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boarding',
  data () {
    return {
      title: {
        logo: false,
        title: '登录'
      },
      account_number: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.account_number)
      this.$store.commit('userLogin', this.account_number)
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
  .log{
    padding-top: 60px;
  }
  .ng-scope{
    padding-top: 50px;
  }
  .ng-scope .zhBox{
    margin: 14px 16px 0;
  }
  .ng-scope ul{
    border: 2px solid #d1d1d1;
    box-sizing: border-box;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  .ng-scope ul li{
    height: 90px;
    border-bottom: 2px solid #ececec;
  }
  .ng-scope ul li:last-child{
    border: 0px;
  }
  .ng-scope ul li input{
    width: 100%;
    height: 100%;
    border: 0px;
    font-size: 28px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .zddl{
    float: left;
  }
  .zhGn{
    margin: 14px 12px 20px;
    height: 14px;
    overflow: visible;
  }
  .zhGn input{
    display:inline-block;
    padding: 10px;
    padding-right: 40px;
  }
  .registered{
    /*padding-top: 2px;*/
    float: right;
    box-sizing: border-box;
  }
  .registered a{
    font-size: 14px;
    color: #7f7f7f;
  }
  .logBox{
    margin-top: 24px;
  }
  .logBox input{
    color: #FFF;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 70px;
    line-height: 51px;
    border-radius: 6px;
    text-shadow: 0 -1px rgba(0,0,0,.2);
    font-size: 30px;
    background: #81A8E4;
    background: -webkit-linear-gradient(#6f94e8,#5178df);
    background: -moz-linear-gradient(#6f94e8,#5178df);
    background: -ms-linear-gradient(#6f94e8,#5178df);
    background: -o-linear-gradient(#6f94e8,#5178df);
    background: linear-gradient(#6f94e8,#5178df);
  }
</style>
