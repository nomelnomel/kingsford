<template>
  <div class="container">
    <MainSlide />
    <About v-if="acfData.about_text" :about="acfData.about_text" />
    <SignUp />
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
  computed: {
    ...mapState(['acfData'])
  },
  mounted () {
    this.$store.dispatch('setAcfData', 'home')
  }
  // async fetch () {
  //   this.acf = await this.$store.dispatch('getInfo', 'home')
  //   this.about = this.acf.about_text
  // }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
