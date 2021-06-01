<template>
  <div class="main">
    <Header />
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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img{
  width: 100%;
}

</style>
