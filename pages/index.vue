<template>
  <div v-if="!loading" class="container">
    <MainSlide />
    <About :about="homeData.about_text" />
    <SignUp />
  </div>
  <div v-else class="loading">
    <img src="@/assets/icons/reload.svg" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainSlide from '../components/MainPage/MainSlide'
import About from '../components/MainPage/About'
import SignUp from '../components/MainPage/SignUp'

export default {
  components: {
    MainSlide,
    About,
    SignUp
  },
  data () {
    return {
      loading: false
    }
  },
  // async fetch () {
  //   try {
  //     this.loading = true
  //     await this.$store.dispatch('setAcfData', 'home')
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log(error)
  //   } finally {
  //     this.loading = false
  //   }
  // },
  computed: {
    ...mapState(['homeData'])
  }

}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
