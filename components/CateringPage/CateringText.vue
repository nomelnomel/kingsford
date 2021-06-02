<template>
  <section class="catering-text">
    <img src="~/assets/images/catering2.png" alt="" class="cat2">
    <h2 class="catering-headline">
      CATERING HEADLINE CAN GO HERE AND BE THIS LONG IF IT NEEDS TO BE UP TO YOU REALLY.
    </h2>
    <p class="catering-about">
      Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
    </p>
  </section>
</template>

<script>
export default {
  name: 'CateringText'
}
</script>

<style scoped lang="scss">
//@import "@/assets/base/mixins";
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
    @media screen and (max-width: $bpT){
      display: none;
    }
  }
  &-headline{
    font-family: alternate-gothic-condensed-a, sans-serif;
    font-size: 83px; /*must be 80*/
    line-height: 96px;
    font-weight: normal;
    //@include poly-fluid-sizing('font-size', (320px:18px, 768px:26px, 1024px:38px, 1440px:46px));

    @include media('<ipad-pro') {
      font-size: 50px;
      line-height: 60px;
    }

    @include media('<laptop') {
      font-size: 64px;
      line-height: 72px;
    }

    //@media screen and (max-width: $bpT){
    //  font-size: 50px;
    //  line-height: 60px;
    //}
  }
  &-about{
    font-family: filson-pro, sans-serif;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
