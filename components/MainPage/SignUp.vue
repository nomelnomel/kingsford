<template>
  <div class="signup">
    <div class="signup-image">
      <img src="~/assets/sign.jpg" alt="">
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
.signup{
  background: red;
  padding: 40px;
  color: #ffffff;
  &-text{
    font-size: 18px;
  }
  &-form{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
  }
  &-input{
    border: none;
    padding: 10px;
    &::placeholder{
      color: red;
      font-size: 13px;
    }
  }
  &-btn{
    color: red;
    background: #ffffff;
    padding-right: 10px;
    text-decoration: underline;
  }
}

</style>
