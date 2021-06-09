<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="~/assets/images/land1.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">
          Friends
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/images/land2.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span class="slider-text-2nd">Fire</span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/images/land3.png" alt="">
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span class="slider-text-2nd">Fire</span>
        <span class="slider-text-3rd">Food</span>
      </div>
    </swiper-slide>
    <!--    <div slot="button-prev" class="swiper-button-prev" />-->
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

  .swiper-slide img {
    display: block;
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
