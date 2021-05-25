<template>
  <div class="main-img">
    <img src="~/assets/main-slide.png" alt="">
    <img src="~/assets/circle.png" alt="" class="circle">
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

  .circle{
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    width: auto;
  }
</style>
