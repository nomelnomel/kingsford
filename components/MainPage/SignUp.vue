<template>
  <div class="signup">
    <div class="signup-image">
      <img src="~/assets/images/sign-back.jpg" alt="" data-aos="fade-in" data-aos-duration="500">
    </div>
    <h3 class="signup-text" data-aos="fade-right" data-aos-duration="500">
      SIGN UP FOR UPDATES
    </h3>
    <form class="signup-form" data-aos="fade-left" data-aos-duration="500">
      <input type="text" class="signup-input" placeholder="Email@website.com">
      <div class="signup-btn hover-underline">
        OK
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

.signup{
  background: $contrast;
  padding: 57px 66px;
  color: $primary;
  text-align: center;

  @include media('<ipad-pro'){
    padding: 25px;
  }

  &-text{
    font-family: alternate-gothic-condensed-a, sans-serif;
    letter-spacing: 3.375px;
    margin: 25px 0 24px;
  }

  &-form{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $primary;
  }

  &-input{
    border: none;
    padding: 22px 0 22px 21px;

    &::placeholder{
      font-family: filson-pro, sans-serif;
      font-size: 14px;
      line-height: 22px;
      color: $contrast;
    }

  }

  &-btn{
    font-family: filson-pro, sans-serif;
    color: red;
    background: $primary;
    margin: 20px;
    position: relative;
    cursor: pointer;
    padding-bottom: 4px;
    width: 35px;

    &:after{
      border-bottom: 3px solid $contrast;
    }

  }

}

</style>
