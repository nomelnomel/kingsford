<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="~/assets/land1.png" alt=""></swiper-slide>
    <swiper-slide><img src="~/assets/land2.png" alt=""></swiper-slide>
    <swiper-slide><img src="~/assets/land3.png" alt=""></swiper-slide>
    <!--    <div slot="button-prev" class="swiper-button-prev" />-->
    <div slot="button-next" class="swiper-button-next" @click="next" />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next'
          // prevEl: '.swiper-button-prev'
        }
        // Some Swiper option/callback...
      },
      counter: 0,
      showMain: false
    }
  },
  methods: {
    next () {
      this.counter++
      if (this.counter === 2) {
        setTimeout(() => {
          this.$emit('showMain')
        }, 2000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container{
    background: $secondary-light;
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    &-text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: auto;
    }
  }
</style>
