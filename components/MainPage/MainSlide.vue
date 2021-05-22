<template>
  <div class="main-img">
    <img src="~/assets/slider3.jpg" alt="">
    <div class="circle">
      scroll
    </div>
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
  }

  .circle{
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid;
    background: #ffffff;
    color: red;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%);
  }
</style>
