<template>
  <header class="abs-header">
    <div class="logo">
      <nuxt-link to="/" class="logo-link">
        <img v-if="isIndex" src="../static/icons/logo-white.svg" alt="">
        <img v-else src="../static/icons/logo-black.svg" alt="">
      </nuxt-link>
    </div>
    <div class="order-btn">
      <nuxt-link to="/ordering">
        order now
      </nuxt-link>
    </div>
    <div class="menu">
      <div
        v-if="show"
        class="burger"
        @click="showMenu"
      >
        <img v-if="isIndex" src="../static/icons/burger-white.svg" alt="">
        <img v-else src="../static/icons/burger-black.svg" alt="">
      </div>

      <div
        class="hidden-menu"
        :class="{'not-hidden' : !show}"
      >
        <div
          class="cross"
          @click="showMenu"
        >
          <img src="~/static/icons/cross.svg" alt="">
        </div>
        <div class="order-btn order-btn-menu">
          <nuxt-link to="/ordering">
            order now
          </nuxt-link>
        </div>
        <nav>
          <nuxt-link to="menu" class="menu1">
            menu
          </nuxt-link>
          <nuxt-link to="locations" class="menu2">
            locations
          </nuxt-link>
          <nuxt-link to="catering" class="menu3">
            catering
          </nuxt-link>
        </nav>

        <div class="hidden-info">
          <img src="~/static/icons/fire.svg" alt="" class="fire">
          <nuxt-link to="/" class="hidden-text">
            contact
          </nuxt-link>
          <div class="hidden-social">
            <div class="icon">
              <img src="~/static/icons/ig.svg" alt="">
            </div>
            <div class="icon">
              <img src="~/static/icons/fb.svg" alt="" class="fb">
            </div>
            <div class="icon">
              <img src="~/static/icons/tw.svg" alt="">
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
  computed: {
    isIndex () {
      return (this.$route.name === 'index')
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
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.abs-header{
  position: absolute;
  width: 100%;
  padding: 20px 40px 0;
}

.logo {
  &-link {
    color: white !important;
    text-decoration: none;
  }
}

.burger {
  cursor: pointer;
}

.cross {
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 50px;
  cursor: pointer;
}

.hidden{
  &-menu {
    position: fixed;
    right: -500px;
    transition: right 0.65s;
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
    .fire{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 272px;
    }
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
  transition: right 0.65s;
  box-shadow: -5px 0 12px 3px rgb(0 0 0 / 10%);
}

.order-btn{
  font-family: henderson-slab-basic, sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3.89px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: $contrast;
  margin-left: auto;
  margin-right: 40px;
  //z-index: 20;
  cursor: pointer;
  &-menu{
    right: 30px;
    position: absolute;
    top: 40px;
  }
  a{
    color: $primary;
    text-decoration: none;
    padding: 10px 20px;
  }
}

nav{
  margin-top: 100px;
}

</style>
