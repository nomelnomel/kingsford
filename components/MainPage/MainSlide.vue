<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(slide,i) in images" :key="slide.name">
      <Images :image-url="slide.image.sizes" :alt="slide.image.name" />
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span v-if="i>0" class="slider-text-2nd">Fire</span>
        <span v-if="i>1" class="slider-text-3rd">Food</span>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Images from '../Images'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Images
  },
  directives: {
    swiper: directive
  },
  props: {
    images: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/base/breakpoints";

.swiper-container {
  background: $secondary-light;
  position: relative;
  max-height: 100vh;
  //height: 100vh; /*bug on tablet*/
  overflow: hidden;
  @include media('<ipad-pro'){
    aspect-ratio: 3 / 2;
    max-height: unset;
  }

  .swiper-slide{
    img {
      display: block;
    }
  }

  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
  }

}

.slider-text {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include media('<mobile') {
    top: 50px;
  }

  &-1st {
    font-size: 160px;
    font-family: alternate-gothic-condensed-a, sans-serif;
    text-transform: uppercase;
    margin-bottom: 20px;

    @include media('<ipad-pro') {
      font-size: 100px;
    }

    @include media('<mobile') {
      font-size: 50px;
    }

  }

  &-2nd {
    font-size: 130px;
    font-family: fenway-park-jf, sans-serif;
    margin-bottom: 20px;

    @include media('<ipad-pro') {
      font-size: 70px;
    }

    @include media('<mobile') {
      font-size: 30px;
    }

  }

  &-3rd {
    font-size: 190px;
    font-family: alternate-gothic-condensed-a, sans-serif;
    text-transform: uppercase;

    @include media('<ipad-pro') {
      font-size: 130px;
    }

    @include media('<mobile') {
      font-size: 70px;
    }

  }
}
</style>
