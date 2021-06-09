<template>
  <div v-if="!loading" class="container menu-page">
    <MenuAbout :text2="acfData.text_2" :text="acfData.text" />
    <MenuMain :menu="acfData.menu_category" />
  </div>
  <div v-else class="loading">
    <img src="@/assets/icons/reload.svg" alt="">
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
  // async asyncData ({ store, route }) {
  //   await store.dispatch('setAcfData', `${route.name}`)
  // },
  data () {
    return {
      current: 0,
      loading: false
    }
  },
  async fetch () {
    try {
      this.loading = true
      await this.$store.dispatch('setAcfData', `${this.$route.name}`)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      this.loading = false
    }
  },
  computed: {
    ...mapState(['acfData'])
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
