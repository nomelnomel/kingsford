<template>
  <section class="catering-address">
    <div class="catering-address-title">
      START A CATERING ORDER
    </div>
    <div class="catering-address-line">
      <div class="top">
        DOWNLOAD CATERING MENU
      </div>
      <div class="bot">
        CATERINGMENU.PDF
      </div>
    </div>
    <div class="catering-address-line">
      <div class="top">
        CALL CATERING EXPERT
      </div>
      <div class="bot">
        123-456-7890
      </div>
    </div>
    <div class="catering-address-line">
      <div class="top">
        EMAIL CATERING EXPERT
      </div>
      <div class="bot">
        CATERING@KINGSFORDGRILLE.COM
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CateringAddress'
}
</script>

<style scoped lang="scss">
.catering{
  &-address{
    flex: 1 1 0;
    align-self: flex-end;
    margin-right: -258px;
    margin-left: 100px;
    &-title{
      font-size: 16px;
      letter-spacing: 1.5px;
      line-height: 18px;
      padding-bottom: 5px;
      margin-bottom: 30px;
      position: relative;
      &:before{
        content: url('~/assets/catering1.png');
        position: absolute;
        top: -38px;
        left: 0;
        transform: translateY(-100%);
      }
      &:after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        border: 2px solid $primary;
        width: 300px;
      }
    }
    &-line{
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
      .top{
        color: $secondary;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
