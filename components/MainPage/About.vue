<template>
  <div class="about">
    <img src="~/assets/circle.png" alt="" class="circle">
    <div class="about-main">
      donec vulputate libero sed
      euismod blandit. proin
      pharetra ultricies metus,
      suscipit placerat sem mollis
      ut. vestibulum convallis in
      libero sed convallis.
    </div>
    <div class="about-text">
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
@import url("https://use.typekit.net/pwo8bya.css");

.circle{
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  width: auto;
}

.about{
  display: flex;
  justify-content: space-between;
  padding: 171px 266px 100px;
  background: url('~/assets/about-back.png') 100% 100% no-repeat;
  background-size: cover;
  position: relative;
  &-main{
    font-size: 36px;
    line-height: 46px;
    text-transform: uppercase;
    text-align: left;
    margin-right: 101px;
    max-width: 600px; /*??*/
    font-family: alternate-gothic-condensed-a, sans-serif;
  }
  &-text{
    font-family: filson-pro, sans-serif;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;

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
      &:after{
        content: '';
        width: 184px;
        border: 2px solid $contrast;
        position: absolute;
        bottom: -15px;
        left: 0;
      }
    }
  }
}

</style>
