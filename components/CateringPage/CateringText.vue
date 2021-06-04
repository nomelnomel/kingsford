<template>
  <section class="catering-text">
    <img src="~/assets/images/catering2.png" alt="" class="cat2">
    <!--    <h2 class="catering-headline">-->
    <!--      CATERING HEADLINE CAN GO HERE AND BE THIS LONG IF IT NEEDS TO BE UP TO YOU REALLY.-->
    <!--    </h2>-->
    <!--    <p class="catering-about">-->
    <!--      Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.-->
    <!--    </p>-->
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
  },
  computed: {
    getText () {
      return this.text.slice(1, -1)
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

    //@include media('<ipad-pro'){
    //  font-size: 50px;
    //  line-height: 60px;
    //}
  }

}
</style>
