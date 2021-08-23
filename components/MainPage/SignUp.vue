<template>
  <div class="signup">
    <div class="signup-image">
      <img src="~/assets/images/sign-back.jpg" alt="" data-aos="fade-in" data-aos-duration="500" data-aos-delay="300">
    </div>
    <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
      <h3 class="signup-text">
        SIGN UP FOR UPDATES
      </h3>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      <div
        v-if="!formValid"
        class="signup-form"
        :class="['join-form', isError]"
      >
        <input v-model="email" type="email" class="signup-input" placeholder="Email@website.com">
        <div class="signup-btn hover-underline" @click="submitForm">
          OK
        </div>
      </div>
      <p v-else class="thank" v-html="status" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      formValid: false,
      status: '',
      err: null
    }
  },
  computed: {
    isError () {
      return this.err !== null ? 'error' : ''
    }
  },
  methods: {
    async submitForm () {
      const self = this
      this.formValid = false
      await this.$axios
        .$post('https://wp.kingsfordfiregrille.com/wp-json/gf/v2/forms/1/submissions', {
          input_1: this.email
        })
        .then((resp) => {
          if (!resp.is_valid) {
            self.err = resp.data.validation_messages[1]
          } else {
            self.status = resp.confirmation_message
            self.formValid = true
          }
        })
        .catch((err) => {
          if (!err.response.data.is_valid) {
            self.err = err.response.data.validation_messages[1]
          } else if (err.response.status !== 200 || err.response.data) {
            self.status =
              '<p>Sorry we are experiencing technical difficulties. Please try again later.</p>'
          }
        })
    }
  }
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
