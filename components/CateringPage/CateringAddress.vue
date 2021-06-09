<template>
  <section class="catering-address">
    <img
      src="~/assets/images/catering1.jpg"
      alt=""
      class="cat1"
      data-aos="fade-up"
      data-aos-delay="1100"
      data-aos-duration="500"
    >
    <div class="catering-address-title">
      start a catering order
    </div>

    <div v-for="(item,i) in info" :key="i" class="catering-address-line">
      <h3 class="top">
        {{ item.text }}
      </h3>
      <a class="link" :href="item.href? item.href + item.link : '#'">
        {{ item.link }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CateringAddress',
  props: {
    info: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

.catering {

  &-address {
    flex: 1 1 0;
    align-self: flex-end;
    margin-right: -258px;
    margin-left: 100px;
    position: relative;

    @include media('<ipad-pro') {
      margin-right: -24px;
    }

    @include media('<mobile') {
      margin: 30px 0 0;
      align-self: self-start;
    }

    .cat1 {
      position: absolute;
      top: -38px;
      left: 0;
      transform: translateY(-100%);
      width: auto;

      @include media('<ipad-pro') {
        top: -50px;
      }

      @include media('<mobile') {
        display: none;
      }

    }

    &-title {
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 18px;
      padding-bottom: 5px;
      margin-bottom: 30px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        border-bottom: 3px solid $primary;
        width: 300px;
      }

    }

    &-line {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      .top {
        color: $secondary;
        margin-bottom: 5px;
        font-size: 16px;
        text-transform: uppercase;
      }

      .link {
        color: $primary;
        text-decoration: none;
      }

    }

  }

}

</style>
