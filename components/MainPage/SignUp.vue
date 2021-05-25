<template>
  <div class="signup">
    <div class="signup-image">
      <img src="~/assets/sign-back.png" alt="">
    </div>
    <div class="signup-text">
      SIGN UP FOR UPDATES
    </div>
    <div class="signup-form">
      <input type="text" class="signup-input" placeholder="Email@website.com">
      <div class="signup-btn">
        OK
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped lang="scss">
@import url("https://use.typekit.net/pwo8bya.css");

.signup{
  background: $contrast;
  padding: 57px 66px;
  color: $primary;
  &-text{
    font-family: alternate-gothic-condensed-a, sans-serif;
    font-size: 36px;
    line-height: 46px;
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
    padding: 20px;
    position: relative;
    cursor: pointer;
    &:after{
      content: '';
      position: absolute;
      bottom: 16px;
      left: 20px;
      border: 2px solid $contrast;
      width: 34px;
    }
  }

}

</style>
