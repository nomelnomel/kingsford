<template>
  <div class="container menu-page">
    <MenuAbout />
    <MenuHeader
      :menu="menu"
      @changeCurrent="changeCurrent($event)"
    />
    <MenuPart :part="menu[current]" />
  </div>
</template>

<script>
import { menu } from '../assets/menu'
import MenuPart from '../components/MenuPage/MenuPart'
import MenuAbout from '../components/MenuPage/MenuAbout'
import MenuHeader from '../components/MenuPage/MenuHeader'
export default {
  name: 'Menu',
  components: {
    MenuPart,
    MenuAbout,
    MenuHeader
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
    }
  }
</style>
