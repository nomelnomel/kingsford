<template>
  <div class="locations">
    <h2>Locations</h2>
    <div class="address">
      <div class="address-image">
        <img src="~/assets/loc1.png" alt="">
      </div>
      <div class="address-text">
        <div class="text">
          <span>TAMPA, FL</span><br>
          1234 Street Name.<br>
          Tampa, FL 12345<br>
          <span class="red">123-456-7890</span><br>
        </div>
      </div>
    </div>

    <div class="address">
      <div class="address-image">
        <img src="~/assets/loc1.png" alt="">
      </div>
      <div class="address-text">
        <div class="text">
          <span>ST. PETE, FL</span><br>
          Coming Soon
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location'
}
</script>

<style scoped lang="scss">

.locations {
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: unset;
  padding: 0 20px 40px;
  background: url('../assets/menu-back.png') 100% 100% no-repeat;
  background-size: cover;
  position: relative;
}
h2{
  font-size: 300px;
  letter-spacing: 0;
  line-height: 300px;
  font-family: fenway-park-jf, sans-serif;
  color: $color-red;
  transform: translateX(26%);
  font-weight: normal;
}

.address {
  display: flex;
  margin-top: 80px;
  position: relative;

  &-image {
    margin-left: 80px;
    z-index: 5;
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
      margin-bottom: 220px;
      margin-left: 65%;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 14px;
      span{
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.484615px;
        color: #212721;
        margin-bottom: 10px;
        display: block;
      }
      .red{
        font-size: 14px;
        color: $color-red;
        display: inline;
      }
    }
  }
}

</style>
