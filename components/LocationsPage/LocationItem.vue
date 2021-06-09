<template>
  <section class="address">
    <div class="address-image">
      <!--      <Images :image-url="image" />-->
      <img src="~/assets/images/loc1.jpg" alt="">
    </div>
    <div class="address-text">
      <div class="text">
        <p>{{ item.location_name }}</p>
        <a href="#" class="address-link">
          {{ item.address }}
        </a>
        <a :href="`tel:${item.phone}`" class="tel">{{ item.phone }}</a>
      </div>
    </div>
  </section>
</template>

<script>
// import Images from '../Images'
export default {
  name: 'LocationItem',
  components: {
    // Images
  },
  props: {
    item: {
      type: Object,
      default: () => {
      },
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/base/breakpoints";

.address {
  display: flex;
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  @include media('<mobile') {
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    margin-top: 0;
  }

  &-image {
    margin-left: 80px;
    z-index: 2;
    width: 50%;

    @include media('<mobile') {
      margin-left: 0;
      width: auto;
    }

  }

  &-text {
    margin-left: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;

    @include media('<mobile') {
      position: unset;
      width: auto;
      margin-left: 0;
      margin-bottom: 40px;
    }

    &:before {
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
      border-top: 3px solid;
      width: 98%;

      @include media('<mobile') {
        border: none;
      }

    }

    .text {
      margin-bottom: 10%;
      margin-left: 65%;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 14px;
      display: flex;
      flex-direction: column;

      @include media('<mobile') {
        margin: 20px 0 0;
      }

      p {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.484615px;
        color: $secondary-light;
        margin-bottom: 10px;
        display: block;
      }

      .tel {
        font-size: 14px;
        color: $contrast;
        display: inline;
        text-decoration: none;
      }

    }

  }

  &-link{
    text-decoration: none;
    color: $secondary;
  }

  &:after {

    @include media('<mobile') {
      content: "";
      position: absolute;
      bottom: 30px;
      left: 50%;
      border-bottom: 3px solid $secondary;
      width: 80%;
      transform: translateX(-50%);
    }

  }

  &:last-child {

    &:after {
      border: none !important;
    }

  }

}
</style>
