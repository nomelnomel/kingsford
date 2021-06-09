<template>
  <section class="catering-text">
    <img src="~/assets/images/catering2.jpg" alt="" class="cat2" data-aos="fade-right" data-aos-delay="1200">
    <span v-html="text" />
  </section>
</template>

<script>
export default {
  name: 'CateringText',
  props: {
    text: {
      type: String,
      default: () => {
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/base/breakpoints";

.catering{

  &-text{
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    position: relative;
  }

  .cat2{
    position: absolute;
    left: -250px;
    top: 200px;
    width: auto;

    @include media('<ipad-pro'){
      display: none;
    }

  }

  h2{
    font-family: alternate-gothic-condensed-a, sans-serif;
    font-size: 83px; /*must be 80*/
    line-height: 96px;
    font-weight: normal;

    @include media('<mobile') {
      font-size: 50px!important;
      line-height: 60px!important;
    }

    @include media('<ipad-pro') {
      font-size: 64px;
      line-height: 72px;
    }

  }

}
</style>
