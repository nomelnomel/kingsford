<template>
  <section class="catering-text">
    <div class="catering-headline">
      CATERING HEADLINE CAN GO HERE AND BE THIS LONG IF IT NEEDS TO BE UP TO YOU REALLY.
    </div>
    <div class="catering-about">
      Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
    </div>
  </section>
</template>

<script>
export default {
  name: 'CateringText'
}
</script>

<style scoped lang="scss">
.catering{
  background: $contrast;
  display: flex;
  color: white;
  padding: 125px 250px 650px;
  position: relative;
  &:after{
    content: url('~/assets/catering3.png');
    position: absolute;
    bottom: 125px;
    right: 0;
  }

  &-text{
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    position: relative;
    &:before{
      content: url('~/assets/catering2.png');
      position: absolute;
      left: -250px;
      top: 200px;
    }
  }
  &-headline{
    font-family: alternate-gothic-condensed-a, sans-serif;
    font-size: 83px; /*должен быть 80*/
    line-height: 96px;
    font-weight: normal;
  }
  &-about{
    font-family: filson-pro, sans-serif;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
