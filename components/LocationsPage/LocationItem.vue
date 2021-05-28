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
      type: String,
      default: () => {},
      required: true
    },
    address: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.address {
  display: flex;
  margin-top: 80px;
  position: relative;
  @media screen and (max-width: $bpM){
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    margin-top: 0;
  }

  &-image {
    margin-left: 80px;
    z-index: 2;
    width: 50%;
    @media screen and (max-width: $bpM){
      margin-left: 0;
      width: auto;
    }
  }

  &-text {
    margin-left: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    @media screen and (max-width: $bpM){
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
      border: 2px solid;
      width: 98%;
      @media screen and (max-width: $bpM){
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
      @media screen and (max-width: $bpM){
        margin: 20px 0 0;

      }
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
  &:after{
    @media screen and (max-width: $bpM){
      content: "";
      position: absolute;
      bottom: 30px;
      left: 50%;
      border: 2px solid;
      width: 80%;
      transform: translateX(-50%);
    }
  }
  &:last-child{
    &:after{
      border: none!important;
    }
  }
}
</style>
