<template>
  <div id="element" class="about">
    <a v-scroll-to="'#element'" href="#">
      <img src="~/assets/icons/circle.svg" alt="" class="circle">
    </a>
    <div class="about-main" data-aos="zoom-in">
      donec vulputate libero sed
      euismod blandit. proin
      pharetra ultricies metus,
      suscipit placerat sem mollis
      ut. vestibulum convallis in
      libero sed convallis.
    </div>
    <div class="about-text" data-aos="zoom-in">
      Pellentesque porttitor condimentum orci, ut semper
      nibh finibus commodo. Pellentesque risus mauris,
      facilisis non elementum maximus, euismod a velit.
      Curabitur iaculis ex lorem, quis consequat mauris
      mattis vitae. Quisque tincidunt dolor et tellus
      pretium, eu accumsan arcu iaculis.

      <nuxt-link to="menu">
        SEE OUR MENU
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">

.circle{
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  width: auto;
  z-index: 2;
  @media screen and (max-width: $bpT){
    width: 120px;
  }
  @media screen and (max-width: $bpM){
    width: 80px;
  }
}

.about{
  display: flex;
  justify-content: space-between;
  padding: 171px 18% 100px;
  background: url('~/assets/images/about-back.png') 100% 100% no-repeat;
  background-size: cover;
  position: relative;
  @media screen and (max-width: $bpT){
    padding: 75px 50px 50px;
  }
  @media screen and (max-width: $bpM){
    flex-direction: column;
  }
  &-main{
    font-size: 36px;
    line-height: 46px;
    text-transform: uppercase;
    text-align: left;
    margin-right: 101px;
    font-family: alternate-gothic-condensed-a, sans-serif;
    @media screen and (max-width: $bpT){
      font-size: 24px;
      line-height: 27px;
      margin-right: 50px;
    }
    @media screen and (max-width: $bpM){
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  &-text{
    font-family: filson-pro, sans-serif;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $bpT){
      font-size: 14px;
      line-height: 17px;
    }

    a{
      color: $contrast;
      margin-top: auto;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 1.5px;
      text-decoration: none;
      position: relative;
      display: block;
      @media screen and (max-width: $bpM){
        margin-bottom: 0;
        margin-top: 30px;
      }
      &:after{
        content: '';
        width: 184px;
        border-bottom: 3px solid $contrast;
        position: absolute;
        bottom: -15px;
        left: 0;
      }
    }
  }
}

</style>
