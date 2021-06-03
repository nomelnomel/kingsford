<template>
  <div v-if="menu" class="container menu-page">
    <MenuAbout />
    <MenuMain :menu="menu" />
  </div>
</template>

<script>
import axios from 'axios'
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
      menu: null,
      current: 0
    }
  },
  mounted () {
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=menu').then(response => (this.menu = response.data[0].acf.menu_category.map(i => i)))
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
