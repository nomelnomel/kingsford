<template>
  <div>
    <div
      v-if="counter===0"
      class="slider"
      @click="counter++"
    >
      <img src="~/assets/land1.png" alt="">
      <img src="~/assets/slider-text1.png" alt="" class="slider-text">
    </div>
    <div
      v-if="counter===1"
      @click="counter++"
    >
      <img src="~/assets/land2.png" alt="">
      <img src="~/assets/slider-text2.png" alt="" class="slider-text">
    </div>
    <div
      v-if="counter===2"
      @click="$emit('lastSlide')"
    >
      <img src="~/assets/land3.png" alt="">
      <img src="~/assets/slider-text3.png" alt="" class="slider-text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped lang="scss">
  .slider{
    background: #212721;
    position: relative;
    &-text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: auto;
    }
  }
</style>
