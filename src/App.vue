<template>
  <div id="app">
    <div class="Box">
      <!--<transition :name="transitionName">-->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      <!--</transition>-->
      <!--<transition :name="transitionName">-->
      <router-view v-if="!$route.meta.keepAlive"/>
      <router-view name="nav"/>
      <!--</transition>-->
    </div>
    <!--<Nav v-show="navShow"></Nav>-->
  </div>
</template>

<script>
import Nav from './store/components/nav'
export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      transitionName: 'left',
      navShow: true
    }
  },
  methods: {
    navFn () {
      let route = this.$route
      if (route.name !== 'home' && route.name !== 'category' && route.name !== 'login' && route.name !== 'user') {
        this.navShow = false
      } else {
        this.navShow = true
      }
    }
  },
  created () {
    this.navFn()
    this.$store.commit('userFn')
  },
  watch: {
    $route (to, form) {
      this.navFn()
      this.$store.commit('userFn')
      if (to.meta.id > form.meta.id) {
        this.transitionName = 'left'
      } else if (to.meta.id < form.meta.id) {
        this.transitionName = 'right'
      }
    }
  },
  updated () {
    console.log(222)
  }
}
</script>

<style>
  .Box{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .left-enter {
    transform: translateX(100%);
  }
  .left-enter-to {
    transform: translateX(0%);
  }
  .left-enter-active {
    transition: .5s;
  }
  .left-leave {
    transform: translateX(0%);
  }
  .left-leave-to {
    transform: translateX(-100%);
  }
  .left-leave-active {
    transition: .5s;
  }

  .right-enter {
    transform: translateX(-100%);
  }
  .right-enter-to {
    transform: translateX(0%);
  }
  .right-enter-active {
    transition: .5s;
  }
  .right-leave {
    transform: translateX(0%);
  }
  .right-leave-to {
    transform: translateX(100%);
  }
  .right-leave-active {
    transition: .5s;
  }
</style>
