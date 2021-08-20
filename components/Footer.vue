<template>
  <div class="footer">
    <div class="footer-menu">
      <!-- <nuxt-link
        v-for="(link, i) in navLinks"
        :key="i"
        :to="`/${link}`"
        class="underline underline-contrast"
      >
        {{ link }}
      </nuxt-link> -->

      <nuxt-link to="/menu" class="underline underline-contrast">
       menu
      </nuxt-link>
      <nuxt-link to="/locations" class="underline underline-contrast">
        locations
      </nuxt-link>
      <nuxt-link to="/catering" class="underline underline-contrast">
        catering
      </nuxt-link>
      <a href="mailto:tampa@kingsfordfiregrille.com" class="underline underline-contrast">
        contact
      </a>
      <nuxt-link to="/" class="underline underline-contrast">
        careers
      </nuxt-link>
    </div>
    <div class="footer-social">
      <div class="icon underline underline-contrast">
        <a href="https://www.instagram.com/kingsfordfiregrille/" target="_blank">
          <img src="~/assets/icons/ig.svg" alt="">
        </a>
      </div>
      <!-- <div class="icon underline underline-contrast">
        <img src="~/assets/icons/fb.svg" alt="" class="fb">
      </div> -->
      <div class="icon underline underline-contrast">
        <a href="https://twitter.com/KingsfordFire" target="_blank">
          <img src="~/assets/icons/tw.svg" alt="">
        </a>
      </div>
    </div>
    <div class="copy">
      COPYRIGHT KINGSFORD GRILLE 2021
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapState(['navLinks'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

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

    @include media('<mobile') {
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
    gap: 36px;

    .icon {
      position: relative;
      cursor: pointer;

      img {
        width: auto;
      }

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
