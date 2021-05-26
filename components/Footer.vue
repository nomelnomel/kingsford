<template>
  <div class="footer">
    <div class="footer-menu">
      <nuxt-link to="menu">
        menu
      </nuxt-link>
      <nuxt-link to="locations">
        locations
      </nuxt-link>
      <nuxt-link to="catering">
        catering
      </nuxt-link>
      <nuxt-link to="/">
        contact
      </nuxt-link>
      <nuxt-link to="/">
        careers
      </nuxt-link>
    </div>
    <div class="footer-social">
      <div class="icon">
        <img src="~/static/icons/ig.png" alt="">
      </div>
      <div class="icon">
        <img src="~/static/icons/fb.png" alt="" class="fb">
      </div>
      <div class="icon">
        <img src="~/static/icons/tw.png" alt="">
      </div>
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
  background: $secondary;
  color: $primary;
  flex-direction: column;

  &-menu {
    a {
      font-family: filson-soft, sans-serif;
      font-weight: 200;
      color: $primary;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 1.5px;
    }
    a + a {
      margin-left: 10px;
    }
  }
  &-social{
    display: flex;
    flex-direction: row;
    margin-top: 34px;
    margin-bottom: 67px;
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
        border: 2px solid $contrast;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .copy{
    font-family: filson-soft, sans-serif;
    font-weight: 200;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1.8px;
  }
}

</style>
