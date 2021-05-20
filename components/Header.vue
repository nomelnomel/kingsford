<template>
 <header>
   <div class="logo">
     <nuxt-link to="/" class="logo-link">Лого</nuxt-link>
   </div>

   <div class="menu">
     <div
       class="burger"
       v-if="show"
       @click="showMenu"
     >
       ---
     </div>

     <div
       class="hidden-menu"
       v-bind:class="{'not-hidden' : !show}"
     >
       <div
         class="cross"
         v-if="!show"
         @click="showMenu"
       >
         x
       </div>

       <nuxt-link to="menu">menu</nuxt-link>
       <nuxt-link to="locations">locations</nuxt-link>
       <nuxt-link to="catering">catering</nuxt-link>
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
header{
  color: #ffffff!important;
  position: relative;
  z-index: 5;
}

.logo{
  position: absolute;
  left: 20px;
  top: 20px;
  &-link{
    color: white!important;
    text-decoration: none;
  }
}

.burger{
  position: absolute;
  top: 20px;
  right: 20px;
}

.hidden-menu{
  position: absolute;
  right: -350px;
  transition: right 2s;
  width: 350px;
  height: 50vh;
  top: 0;
  background: red;
  a{
    color: white;
    text-decoration: none;
  }
}

.not-hidden{
  right: 0;
  transition: right 2s;
}

</style>
