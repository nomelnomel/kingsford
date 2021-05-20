<template>
<div class="container">
  <div class="address">
    <div class="address-image">
      картинка
    </div>
    <div class="address-text">
      <div class="text">
        ST.PETE, FL
      </div>
    </div>
  </div>

  <div class="address">
    <div class="address-image">
      картинка
    </div>
    <div class="address-text">
      <div class="text">
        ST.PETE, FL<br>
        Lorem <br>
        Lorem
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'location'
}
</script>

<style scoped lang="scss">

.container{
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: unset;
  margin: 100px 20px;
}

  .address{
    display: flex;
    margin-bottom: 20px;
    position: relative;

    &-image{
      width: 500px;
      height: 300px;
      background: #7f828b ;
      margin-left: 40px;
      z-index: 5;
    }

    &-text{
      margin-left: 20px;
      position: absolute;
      bottom: 0;
      width: 100%;
      &:before{
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        border: 1px solid;
        width: 98%;
      }

      .text{
        margin-bottom: 100px;
        margin-left: 300px;
      }
    }
  }

</style>
