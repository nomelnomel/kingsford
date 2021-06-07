<template>
  <div class="container">
    <MainSlide />
    <About v-if="about" :about="about" />
    <SignUp />
  </div>
</template>

<script>
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
      about: null,
      acf: null
    }
  },
  async fetch () {
    this.acf = await this.$store.dispatch('getInfo', 'home')
    this.about = this.acf.about_text
  }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
