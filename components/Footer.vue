<template>
  <div class="footer">
    <div class="footer-menu">
      <nuxt-link to="menu">menu</nuxt-link>
      <nuxt-link to="locations">locations</nuxt-link>
      <nuxt-link to="catering">catering</nuxt-link>
      <nuxt-link to="/">contact</nuxt-link>
    </div>
    <div class="footer-social">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
    <div class="copy">
      COPYRIGHT KINGSFORD GRILLE 2021
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: black;
  color: white;
  flex-direction: column;

  &-menu {
    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
    a + a {
      margin-left: 10px;
    }
  }
  &-social{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 30px;
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
        border: 2px solid red;
      }
    }

    .icon+.icon{
      margin-left: 10px;
    }
  }
  .copy{
    font-size: 10px;
  }
}

</style>
