<template>
  <div class="container">
    <MainSlide />
    <About />
    <SignUp/>
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
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

</style>
