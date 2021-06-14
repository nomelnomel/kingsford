<template>
  <div class="main">
    <Header />
    <img src="../assets/images/menu-back.png" style="display: none">
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

html {
  font-size: 16px;
  word-spacing: 1px;
  font-family: Roboto, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  &::-webkit-scrollbar{
   display: none;
  }
}

.main{
  margin: 0 auto;
  position: relative;
  //overflow-x: hidden;
  /*max-width: 1440px;*/
  background-color: $contrast;
}

*, {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none !important;
  text-rendering: optimizelegibility;
}

*::before,
*::after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

img{
  width: 100%;
}

</style>
