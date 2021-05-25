<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="~/assets/land1.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">
          Friends
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/land2.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span class="slider-text-2nd">Fire</span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/land3.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span class="slider-text-2nd">Fire</span>
        <span class="slider-text-3rd">Food</span>
      </div>
    </swiper-slide>
    <!--    <div slot="button-prev" class="swiper-button-prev" />-->
    <div slot="button-next" class="swiper-button-next" @click="next" />
  </swiper>
</template>

<script>
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
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
        }, 6000)
      }
      if (this.counter === 3) {
        this.$emit('showMain')
      }
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  background: $secondary-light;
  position: relative;
  max-height: 100vh;
  overflow: hidden;

  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
  }
}
.slider-text{
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-1st{
    font-size: 160px;
    font-family: alternate-gothic-condensed-a, sans-serif;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &-2nd{
    font-size: 130px;
    font-family: fenway-park-jf, sans-serif;
    margin-bottom: 20px;
  }
  &-3rd{
    font-size: 190px;
    font-family: alternate-gothic-condensed-a, sans-serif;
    text-transform: uppercase;
  }
}
</style>
