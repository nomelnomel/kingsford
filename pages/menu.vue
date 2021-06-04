<template>
  <div v-if="menu" class="container menu-page">
    <MenuAbout :text2="text2" :text="text" />
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
      current: 0,
      text: null,
      text2: null
    }
  },
  mounted () {
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=menu').then(response => (this.menu = response.data[0].acf.menu_category))
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=menu').then(response => (this.text2 = response.data[0].acf.text_2))
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=menu').then(response => (this.text = response.data[0].acf.text))
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
