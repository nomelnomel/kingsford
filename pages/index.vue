<template>
  <div class="container">
    <MainSlide :images="homeData.pictures" />
    <About :about="homeData.about_text" />
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
