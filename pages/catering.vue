<template>
  <div class="catering">
    <div class="catering-text">
      <div class="catering-headline">
        CATERING HEADLINE CAN GO HERE AND BE THIS LONG IF IT NEEDS TO BE UP TO YOU REALLY.
      </div>
      <div class="catering-about">
        Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
      </div>
    </div>
    <div class="catering-address">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catering'
}
</script>

<style scoped lang="scss">
  .catering{
    background: $color-red;
    display: flex;
    color: white;
    padding: 125px 250px 650px;
    position: relative;
    &:after{
      content: url('~/assets/catering3.png');
      position: absolute;
      bottom: 125px;
      right: 0;
    }

    &-text{
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      position: relative;
      &:before{
        content: url('~/assets/catering2.png');
        position: absolute;
        left: -250px;
        top: 200px;
      }
    }
    &-headline{
      font-family: alternate-gothic-condensed-a, sans-serif;
      font-size: 83px; /*должен быть 80*/
      line-height: 96px;
      font-weight: normal;
    }
    &-about{
      font-family: filson-pro, sans-serif;
      font-size: 16px;
      line-height: 22px;
    }
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
          border: 2px solid white;
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
          color: black;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
