<template>
  <header>
    <div class="logo">
      <nuxt-link to="/" class="logo-link">
        <img src="../assets/logo-black.png" alt="">
      </nuxt-link>
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
          v-if="!show"
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

        <div class="hidden-footer">
          <div class="hidden-text">
            contact
          </div>
          <div class="hidden-social">
            <div class="icon" />
            <div class="icon" />
            <div class="icon" />
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
  color: #ffffff !important;
  position: relative;
  z-index: 5;
}

.logo {
  position: absolute;
  left: 20px;
  top: 20px;

  &-link {
    color: white !important;
    text-decoration: none;
  }
}

.burger {
  position: absolute;
  top: 20px;
  right: 20px;
}

.cross {
  font-size: 50px;
}

.hidden{
  &-menu {
    position: absolute;
    right: -500px;
    transition: right 2s;
    width: 500px;
    height: 100vh;
    top: 0;
    background: red;
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    a {
      color: white;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .menu1{
      font-size: 50px;
      text-transform: uppercase;
      margin-left: 100px;
    }

    .menu2{
      font-size: 40px;
      margin-left: 150px;
      text-transform: capitalize;
    }
    .menu3{
      font-size: 30px;
      text-decoration: underline;
      margin-left: 50px;
    }
  }
  &-footer{
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
  &-social{
    display: flex;
    margin: 30px 0;
    .icon{
      width: 30px;
      height: 30px;
      background: white;
      position: relative;
      &:after{
        content: '';
        width: 100%;
        position: absolute;
        bottom: -10px;
        border: 2px solid black;
      }
    }

    .icon+.icon{
      margin-left: 10px;
    }
  }
}

.not-hidden {
  right: 0;
  transition: right 2s;
}

</style>
