<template>
  <div class="footer">
    <div class="footer-menu">
      <nuxt-link to="menu" class="underline underline-contrast">
        menu
      </nuxt-link>
      <nuxt-link to="locations" class="underline underline-contrast">
        locations
      </nuxt-link>
      <nuxt-link to="catering" class="underline underline-contrast">
        catering
      </nuxt-link>
      <nuxt-link to="/" class="underline underline-contrast">
        contact
      </nuxt-link>
      <nuxt-link to="/" class="underline underline-contrast">
        careers
      </nuxt-link>
    </div>
    <div class="footer-social">
      <div class="icon underline underline-contrast">
        <img src="~/assets/icons/ig.svg" alt="">
      </div>
      <div class="icon underline underline-contrast">
        <img src="~/assets/icons/fb.svg" alt="" class="fb">
      </div>
      <div class="icon underline underline-contrast">
        <img src="~/assets/icons/tw.svg" alt="">
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
    display: flex;
    gap: 20px;
    @media screen and (max-width: $bpM) {
      flex-direction: column;
      align-items: center;
    }

    a {
      font-family: henderson-slab-basic, sans-serif;
      font-weight: 200;
      color: $primary;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 1.5px;
      padding-bottom: 2px;
    }

  }

  &-social {
    display: flex;
    flex-direction: row;
    margin-top: 34px;
    margin-bottom: 67px;
    gap: 36px; /*is it legal? :D*/
    .icon {
      position: relative;
      cursor: pointer;
      img {
        width: auto;
      }

      //.fb {
      //  padding: 0 36px;
      //}

    }
  }

  .copy {
    font-family: filson-soft, sans-serif;
    font-weight: 200;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1.8px;
  }
}

</style>
