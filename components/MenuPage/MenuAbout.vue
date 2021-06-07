<template>
  <section class="menu-about">
    <div ref="par" class="menu-text" data-aos="fade-right" data-aos-delay="600" data-aos-duration="900">
      <span class="line line-left" />
      <div class="wiz" v-html="text" />
    </div>
    <img
      src="~/assets/images/menu-text.png"
      alt=""
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="900"
      data-aos-easing="ease-out"
    >
    <div class="menu-text" data-aos="fade-left" data-aos-delay="600" data-aos-duration="900">
      <span class="line line-right" />
      <div class="wiz" v-html="text2" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuAbout',
  props: {
    text2: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }

}
</script>

<style lang="scss">
@import "@/assets/base/breakpoints";

.h3line{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &-left{
    margin-right: 50px;
    h3{
      padding-left: 50px;
      @include media('<ipad-pro'){
        padding-left: 20px;
      }

    }
    .line{
      margin-left: -100px;
      @include media('<ipad-pro'){
        margin-left: -50px;
      }
    }
  }
  &-right{
    margin-left: 50px;
    h3{
      padding-right: 50px;
      @include media('<ipad-pro'){
        padding-right: 20px;
      }

    }
    .line{
      margin-right: -100px;
      @include media('<ipad-pro'){
        margin-right: -50px;
      }
    }
  }
  h3{
    display: block;
    @include media('<ipad-pro'){
      max-width: 180px;
    }
  }

}

.menu{
  &-page{
    background: url('~/assets/images/menu-back.png') 100% 100% no-repeat;
    background-size: cover;
  }
  &-about{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px 9% 0;
    //margin-top: 65px;
    @include media('<ipad-pro'){
      padding-top: 100px;
    }
    @include media('<mobile'){
      flex-direction: column;
    }
    img{
      max-width: 25%;
      margin: 0 15px;
      @include media('<mobile'){
        max-width: 50%;
        margin: 25px 0;
      }
    }
  }
  &-text{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    .line{
      display: block;
      width: 70px;
      border-bottom: 2px solid black;
      position: absolute;
      top: 10px;
      @include media('<ipad-pro'){
        width: 40px;
      }
      &-right{
        transform: translateX(70%);
        right: 0;
        @include media('<ipad-pro'){
          transform: translateX(80%);
        }
      }
      &-left{
        transform: translateX(calc(-50% + 15px));
        left: 0;
        @include media('<ipad-pro'){
          transform: translateX(calc(-80% + 15px));
        }
      }
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
  //&-header{
  //  display: flex;
  //  justify-content: space-between;
  //  width: 100%;
  //  margin-top: 100px;
  //  padding: 0 200px;
  //  margin-bottom: 100px;
  //  position: relative;
  //  &:after{
  //    content: '';
  //    border-top: 3px solid $secondary;
  //    position: absolute;
  //    width: 100%;
  //    left: 0;
  //    z-index: 3;
  //    top: -30px;
  //  }
  //}
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
  }
}

</style>
