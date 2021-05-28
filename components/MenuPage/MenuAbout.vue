<template>
  <section class="menu-about">
    <div class="menu-text">
      <div class="h3line h3line-left">
        <span class="line" />
        <h3 class="menu-line-left">
          ABOUT OUR MENU
        </h3>
      </div>
      <p>
        Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
      </p>
    </div>
    <img src="~/static/images/menu-text.png" alt="">
    <div class="menu-text">
      <div class="h3line h3line-right">
        <h3 class="menu-line-right">
          OUR SIGNATURE GRILL
        </h3>
        <span class="line" />
      </div>

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
.h3line{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &-left{
    margin-right: 50px;
    h3{
      padding-left: 50px;
      @media screen and (max-width: $bpT){
        padding-left: 20px;
      }

    }
    .line{
      margin-left: -100px;
      @media screen and (max-width: $bpT){
        margin-left: -50px;
      }
    }
  }
  &-right{
    margin-left: 50px;
    h3{
      padding-right: 50px;
      @media screen and (max-width: $bpT){
        padding-right: 20px;
      }

    }
    .line{
      margin-right: -100px;
      @media screen and (max-width: $bpT){
        margin-right: -50px;
      }
    }
  }
  h3{
    display: block;
    @media screen and (max-width: $bpT){
      max-width: 180px;
    }
  }
  .line{
    display: block;
    width: 121px;
    border-bottom: 2px solid black;
    @media screen and (max-width: $bpT){
      width: 80px;
    }
  }
}

.menu{
  &-page{
    background: url('~/static/images/menu-back.png') 100% 100% no-repeat;
    background-size: cover;
  }
  &-about{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px 9% 0;
    //margin-top: 65px;
    @media screen and (max-width: $bpT){
      padding-top: 100px;
    }
    @media screen and (max-width: $bpM){
      flex-direction: column;
    }
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
      //margin-bottom: 20px;
      position: relative;
      @media screen and (max-width: $bpT){
        font-size: 28px;
        line-height: 28px;
      }
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
    //&:before{
    //  content: '';
    //  border: 2px solid $secondary;
    //  //position: absolute;
    //  //left: -50%;
    //  //top: 50%;
    //  //transform: translate(100%,-100%);
    //  width: 121px;
    //  align-self: center;
    //}
  }
  &-line-right{
    //&:after{
    //  content: '';
    //  border: 2px solid $secondary;
    //  //position: absolute;
    //  //right: -50%;
    //  //top: 50%;
    //  //transform: translate(-100%,-100%);
    //  width: 121px;
    //}
  }
  &-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    padding: 0 200px;
    margin-bottom: 100px;
    position: relative;
    &:after{
      content: '';
      border-top: 3px solid $secondary;
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
    color: $primary;
    &:before{
      content: '';
      height: 122px;
      width: 279px;
      background: $contrast;
      position: absolute;
      z-index: -1;
      top:0;
      left:50%;
      transform:translate(-50%, -50%);
    }
  }
}
img{
    max-width: 25%;
    margin: 0 15px;
  @media screen and (max-width: $bpM){
    max-width: 50%;
    margin: 25px 0;
  }
}

</style>
