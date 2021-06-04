<template>
  <div class="container">
    <MainSlide />
    <About v-if="about" :about="about" />
    <SignUp />
  </div>
</template>

<script>
import axios from 'axios'
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
      endslider: false,
      about: null
    }
  },
  mounted () {
    axios.get('https://wp.kingsfordfiregrille.com//wp-json/wp/v2/pages/?slug=home').then(response => (this.about = response.data[0].acf.about_text))
  }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  text-align: center;
}

</style>
