<template>
  <div class="container">
    <MainSlide />
    <About />
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
      endslider: false
    }
  }
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/pwo8bya.css");

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
