<template>
  <div v-if="menu" class="container menu-page">
    <MenuAbout :text2="text2" :text="text" />
    <MenuMain :menu="menu" />
  </div>
</template>

<script>
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
      text2: null,
      acf: null
    }
  },
  async fetch () {
    this.acf = await this.$store.dispatch('getInfo', `${this.$route.name}`)
    this.menu = this.acf.menu_category
    this.text = this.acf.text
    this.text2 = this.acf.text_2
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
