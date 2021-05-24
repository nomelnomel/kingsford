<template>
  <section class="menu-about">
    <div class="menu-text">
      <h3 class="menu-line-left">
        ABOUT OUR MENU
      </h3>
      <p>
        Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
      </p>
    </div>
    <img src="~/assets/menu-text.png" alt="">
    <div class="menu-text">
      <h3 class="menu-line-right">
        OUR SIGNATURE GRILL
      </h3>
      <p>
        Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuAbout'
}
</script>

<style scoped lang="scss">
.menu{
  &-page{
    background: url('~/assets/menu-back.png') 100% 100% no-repeat;
    background-size: cover;
  }
  &-about{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px 129px 0;
    //margin-top: 65px;
  }
  &-text{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    h3{
      font-family: alternate-gothic-condensed-a, sans-serif;
      font-size: 36px;
      line-height: 43px;
      text-transform: uppercase;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 20px;
      position: relative;
    }
    p{
      font-family: filson-pro, sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-style: normal;
      font-weight: normal;
    }
  }
  &-line-left{
    &:before{
      content: '';
      border: 2px solid black;
      position: absolute;
      left: -50%;
      top: 50%;
      transform: translate(100%,-100%);
      width: 121px;
    }
  }
  &-line-right{
    &:before{
      content: '';
      border: 2px solid black;
      position: absolute;
      right: -50%;
      top: 50%;
      transform: translate(-100%,-100%);
      width: 121px;
    }
  }
  &-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    padding: 0 200px;
    margin-bottom: 100px;
    position: relative;
    &:before{
      content: '';
      border-top: 3px solid;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 3;
      top: -30px;
    }
  }
  &-item{
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.484615px;
    position: relative;
    z-index: 2;
    margin-top: 10px;
  }
  &-active{
    color: white;
    &:before{
      content: '';
      height: 122px;
      width: 279px;
      background: $color-red;
      position: absolute;
      z-index: -1;
      top:0;
      left:50%;
      transform:translate(-50%, -50%);
    }
  }
}
</style>
