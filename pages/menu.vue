<template>
  <div class="container menu-page">
    <MenuAbout />
    <MenuMain :menu="menu" />
  </div>
</template>

<script>
import { menu } from '../assets/menu'
import MenuAbout from '../components/MenuPage/MenuAbout'
import MenuMain from '../components/MenuPage/MenuMain'
export default {
  name: 'Menu',
  components: {

    MenuAbout,
    MenuMain
  },
  data () {
    return {
      menu,
      current: 0
    }
  },
  methods: {
    changeCurrent (num) {
      this.current = num
    }
  }

}
</script>

<style scoped lang="scss">
  .menu{
    &-page {
      background: url('../assets/images/menu-back.png') 100% 100% no-repeat;
      background-size: cover;
      overflow: hidden;
      background-color: $primary!important;
      background-position: top;
    }
  }
</style>
