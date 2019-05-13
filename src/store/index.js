import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  // 定义数据
  state: {
    list: [],
    listData: [{sku_info: [{spec_json: {}}]}],
    classification: [],
    goods: {},
    goodsPic: {
      spu: {
        sku_info: []
      }
    },
    carTop: [],
    scroll: 300,
    user: {
      car: [],
      goods: []
    },
    goodsOff: false,
    goodsSum: 1,
    loadingOff: true
  },
  // 修改state数据，也是唯一能修改state数据的方法
  mutations: {
    // 定义的方法，参数一: 行参，填入任何字母都可以。  参数二: 传参。
    listPush (state, data) {
      state.list.push(data)
      console.log(state.list)
    },
    listTh (state, data) {
      state.listData = data
      console.log(state.listData)
    },
    classTh (state, data) {
      state.classification = data
      console.log(state.listData)
    },
    goodsShow (state, data) {
      state.goods = data
    },
    Pic (state, data) {
      state.goodsPic = data
      console.log(state.goodsPic)
    },
    carTopFn (state, data) {
      state.carTop = data
      console.log(state.carTop)
    },
    goodsOffFn (state, data) {
      state.goodsOff = data
    },
    userFn (state) {
      let user = JSON.parse(localStorage.getItem('hammer_user'))
      let login = {car: []}
      console.log(user)
      if (user) {
        for (var i = 0; i < user.length; i++) {
          // console.log(user[i])
          if (user[i].off) {
            login = user[i]
          }
        }
      }
      state.user = login
    },
    userQc (state) {
      let user = JSON.parse(localStorage.getItem('hammer_user'))
      for (var i = 0; i < user.length; i++) {
        if (user[i].account === state.user.account) {
          user[i] = state.user
        }
      }
      localStorage.setItem('hammer_user', JSON.stringify(user))
    },
    userUpadGoods (state) {
      state.goodsPic.off = true
      state.goodsPic.sum = state.goodsSum
      state.user.car.unshift(state.goodsPic)
      this.commit('userQc')
    },
    userQuit (state) {
      state.user.off = false
      this.commit('userQc')
    },
    goodsSumFn (state, data) {
      state.goodsSum += data
      if (state.goodsSum < 1) {
        state.goodsSum = 1
      }
      // console.log(state.goodsSum)
    },
    userLogin (state, data) {
      let user = JSON.parse(localStorage.getItem('hammer_user'))
      if (user) {
        for (var i = 0; i < user.length; i++) {
          if (user[i].account === data.account && user[i].password === data.password) {
            user[i].off = true
          }
        }
      }
      localStorage.setItem('hammer_user', JSON.stringify(user))
    },
    buyList (state) {
      state.user.goods.push(...state.user.car.filter(itme => itme.off))
      state.user.car = state.user.car.filter(itme => !itme.off)
      this.commit('userQc')
      console.log(state.user)
    },
    loadingFn (state, off) {
      state.loadingOff = off
    }
  },
  // 类似于计算属性
  getters: {
    userFn (state) {
      let user = JSON.parse(localStorage.getItem('hammer_user'))
      let login
      if (user) {
        for (var i = 0; i < user.length; i++) {
          if (user[i].off) {
            login = user[i]
          }
        }
      }
      return login
    }
  },
  // 异步操作，数据请求和定时器必须放在这里执行
  // 在单页面调用：this.$store.dispatch('updateActions', 10)
  actions: {
    updateActions (state, upadte) {
      setTimeout(() => {
        // 触发在vuex定义的方法
        state.commit('updateP', upadte)
      }, 1000)
    }
  }
})
// 把vuex暴露出去
export default store
