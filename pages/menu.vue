<template>
  <div class="container menu-page">
    <MenuAbout :text2="menuData.acf.text_2" :text="menuData.acf.text" />
    <MenuMain :menu="menuData.acf.menu_category" />
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
  head () {
    return {
      title: this.menuData.yoast_meta.find(obj => obj.property === 'og:title').content,
      meta: this.menuData.yoast_meta
    }
  },
  computed: {
    ...mapState(['menuData'])

  }
}
</script>

<style scoped lang="scss">
  .menu{
    &-page {
      // background: url('../assets/images/menu-back.png') 100% 100% no-repeat;
      // background-size: cover;
      overflow: hidden;
      background-color: $primary!important;
      background-position: top;
    }
  }

</style>
