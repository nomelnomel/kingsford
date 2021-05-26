<template>
  <div class="main-img">
    <img src="~/static/images/land3.png" alt="">
    <swiper-slide>
      <div class="slider-text">
        <span class="slider-text-1st">Friends</span>
        <span class="slider-text-2nd">Fire</span>
        <span class="slider-text-3rd">Food</span>
      </div>
    </swiper-slide>
  </div>
</template>

<script>
export default {
  name: 'MainSlide'
}
</script>

<style scoped>
  .main-img{
    position: relative;
    max-height: 100vh;
    overflow: hidden;
  }

</style>
