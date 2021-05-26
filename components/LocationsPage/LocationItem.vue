<template>
  <section class="address">
    <div class="address-image">
      <!--      <Images :image-url="image" />-->
      <img src="~/static/images/loc1.png" alt="">
    </div>
    <div class="address-text">
      <div class="text">
        <p>{{ address.name }}</p>
        <span>{{ address.street }}</span>
        <span>{{ address.index }}</span>
        <span class="red">{{ address.tel }}</span>
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
    image: {
      type: String
    },
    address: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.address {
  display: flex;
  margin-top: 80px;
  position: relative;

  &-image {
    margin-left: 80px;
    z-index: 5;
    width: 50%;
  }

  &-text {
    margin-left: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
      border: 2px solid;
      width: 98%;
    }

    .text {
      margin-bottom: 10%;
      margin-left: 65%;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      p{
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.484615px;
        color: $secondary-light;
        margin-bottom: 10px;
        display: block;
      }
      .red{
        font-size: 14px;
        color: $contrast;
        display: inline;
      }
    }
  }
}
</style>
