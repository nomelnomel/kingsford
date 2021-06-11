<template>
  <div class="container">
    <MainSlide :images="homeData.acf.pictures" />
    <About :about="homeData.acf.about_text" />
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
  head () {
    return {
      title: this.homeData.title.rendered,
      meta: this.homeData.yoast_meta
    }
  },
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
