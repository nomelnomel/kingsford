<template>
  <header>
    <div class="logo">
      <nuxt-link to="/" class="logo-link">
        <img src="../assets/logo-black.png" alt="">
      </nuxt-link>
    </div>
    <div class="order-btn" :class="{'order-btn-menu' : !show}">
      order now
    </div>
    <div class="menu">
      <div
        v-if="show"
        class="burger"
        @click="showMenu"
      >
        <img src="../assets/burger-black.png" alt="">
      </div>

      <div
        class="hidden-menu"
        :class="{'not-hidden' : !show}"
      >
        <div
          class="cross"
          @click="showMenu"
        >
          &times;
        </div>

        <nuxt-link to="menu" class="menu1">
          menu
        </nuxt-link>
        <nuxt-link to="locations" class="menu2">
          locations
        </nuxt-link>
        <nuxt-link to="catering" class="menu3">
          catering
        </nuxt-link>

        <div class="hidden-info">
          <nuxt-link to="/" class="hidden-text">
            contact
          </nuxt-link>
          <div class="hidden-social">
            <div class="icon">
              <img src="~/assets/ig.png" alt="">
            </div>
            <div class="icon">
              <img src="~/assets/fb.png" alt="" class="fb">
            </div>
            <div class="icon">
              <img src="~/assets/tw.png" alt="">
            </div>
          </div>
          <div class="hidden-copy">
            COPYRIGHT KINGSFORD GRILLE 2021
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      show: true
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="scss">
header {
  color: $primary !important;
  position: relative;
  z-index: 5;
}

.logo {
  position: absolute;
  left: 20px;
  top: 40px;

  &-link {
    color: white !important;
    text-decoration: none;
  }
}

.burger {
  position: absolute;
  top: 40px;
  right: 20px;
}

.cross {
  font-size: 50px;
}

.hidden{
  &-menu {
    position: fixed;
    right: -500px;
    transition: right 2s;
    width: 500px;
    height: 100vh;
    top: 0;
    background: $contrast;
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    a {
      color: $primary;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .menu1{
      font-family: alternate-gothic-condensed-a, sans-serif;
      font-size: 90px;
      letter-spacing: 2.42px;
      line-height: 108px;
      text-transform: uppercase;
      margin-left: 100px;
    }

    .menu2{
      font-family: fenway-park-jf, sans-serif;
      font-size: 60px;
      letter-spacing: 0;
      line-height: 78px;
      margin-left: 218px;
      text-transform: capitalize;
    }
    .menu3{
      font-family: filson-pro, sans-serif;
      text-transform: uppercase;
      font-size: 30px;
      text-decoration: underline;
      margin-left: 70px;
    }
  }
  &-info{
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
  &-text{
    font-family: filson-soft, sans-serif;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 3.89px;
    line-height: 14px;
    text-transform: uppercase;
  }
  &-social{
    display: flex;
    flex-direction: row;
    margin-top: 34px;
    margin-bottom: 53px;
    .icon{
      position: relative;
      img{
        width: auto;
      }
      .fb{
        margin: 0 36px;
      }
      &:after{
        content: '';
        width: 23px;
        position: absolute;
        bottom: -10px;
        border: 2px solid $secondary;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  &-copy{
    font-family: filson-soft, sans-serif;
    font-size: 12px;
    letter-spacing: 1.8px;
    line-height: 22px;
    text-align: center;
  }
}

.not-hidden {
  right: 0;
  transition: right 2s;
}

.order-btn{
  font-family: filson-soft, sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3.89px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: $primary;
  padding: 10px 20px;
  background: $contrast;
  position: absolute;
  top: 40px;
  right: 100px;
  z-index: 20;
  cursor: pointer;
  &-menu{
    right: 30px;
  }
}

</style>
