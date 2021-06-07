<template>
  <div v-if="acfData" class="container menu-page">
    <MenuAbout :text2="acfData.text_2" :text="acfData.text" />
    <MenuMain v-if="acfData.menu_category" :menu="acfData.menu_category" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      current: 0
    }
  },
  computed: {
    ...mapState(['acfData'])
  },
  mounted () {
    this.$store.dispatch('setAcfData', `${this.$route.name}`)
    // this.menu = this.acf.menu_category
    // this.text = this.acf.text
    // this.text2 = this.acf.text_2
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
