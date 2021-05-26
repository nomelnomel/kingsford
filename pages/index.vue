<template>
  <div>
    <div>
      <MainSlide />
      <About />
      <SignUp />
    </div>
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

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
