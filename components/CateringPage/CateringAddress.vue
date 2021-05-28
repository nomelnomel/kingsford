<template>
  <section class="catering-address">
    <div class="catering-address-title">
      START A CATERING ORDER
    </div>
    <div class="catering-address-line">
      <h3 class="top">
        DOWNLOAD CATERING MENU
      </h3>
      <a class="link" href="#">
        CATERINGMENU.PDF
      </a>
    </div>
    <div class="catering-address-line">
      <h3 class="top">
        CALL CATERING EXPERT
      </h3>
      <a class="link" href="tel:123-456-7890">
        123-456-7890
      </a>
    </div>
    <div class="catering-address-line">
      <h3 class="top">
        EMAIL CATERING EXPERT
      </h3>
      <a class="link" href="mailto:CATERING@KINGSFORDGRILLE.COM">
        CATERING@KINGSFORDGRILLE.COM
      </a>
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
    @media screen and (max-width: $bpT){
      margin-right: -24px;
    }
    @media screen and (max-width: $bpM){
      margin: 30px 0 0;
      align-self: self-start;
    }
    &-title{
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 18px;
      padding-bottom: 5px;
      margin-bottom: 30px;
      position: relative;
      &:before{
        content: url('~/static/images/catering1.png');
        position: absolute;
        top: -38px;
        left: 0;
        transform: translateY(-100%);
        @media screen and (max-width: $bpT){
          top: -50px;
        }
        @media screen and (max-width: $bpM){
          content: '';
        }
      }
      &:after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        border-bottom: 3px solid $primary;
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
        font-size: 16px;
      }
      .link{
        color: $primary;
        text-decoration: none;
      }
    }
  }
}
</style>
