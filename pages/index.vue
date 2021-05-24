<template>
  <div>
    <LandingPage
      v-if="!endslider"
      @lastSlide="endslider = true"
    />
    <div v-else class="container">
      <MainSlide />
      <About />
      <SignUp />
    </div>
  </div>
</template>

<script>
import LandingPage from '../components/Landing/LandingPage'
import MainSlide from '../components/MainPage/MainSlide'
import About from '../components/MainPage/About'
import SignUp from '../components/MainPage/SignUp'

export default {
  components: {
    LandingPage,
    MainSlide,
    About,
    SignUp
  },
  data () {
    return {
      endslider: false
    }
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
