<template>
  <div class="container menu-page">
    <div class="menu-about">
      <div class="menu-text menu-line-left">
        <h3>
          ABOUT OUR MENU
        </h3>
        <p>
          Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
        </p>
      </div>
      <img src="../assets/menu-text.png" alt="">
      <div class="menu-text menu-line-right">
        <h3>
          OUR SIGNATURE GRILL
        </h3>
        <p>
          Pellentesque porttitor condimentum orci, ut semper nibh finibus commodo. Pellentesque risus mauris, facilisis non elementum maximus, euismod a velit. Curabitur iaculis ex lorem, quis consequat mauris mattis vitae. Quisque tincidunt dolor et tellus pretium, eu accumsan arcu iaculis.
        </p>
      </div>
    </div>
    <div class="menu-header">
      <div
        v-for="(item,i) in menu"
        :key="item.id"
        class="menu-item"
        :class="{'menu-active': current === item.id - 1}"
        @click="current = i"
      >
        {{ item.title }}
      </div>
    </div>
    <MenuPart :part="menu[current]" />
  </div>
</template>

<script>
import { menu } from '../assets/menu'
import MenuPart from '../components/MenuPage/MenuPart'
export default {
  name: 'Menu',
  components: {
    MenuPart
  },
  data () {
    return {
      menu,
      current: 0
    }
  }
}
</script>

<style scoped lang="scss">
  .menu{
    &-page{
      background: url('../assets/menu-back.png');
    }
    &-about{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 65px 129px 0;
      //margin-top: 65px;
      position: relative;
    }
    &-text{
      display: flex;
      flex-direction: column;
      h3{
        font-size: 36px;
        line-height: 46px;
        text-transform: uppercase;
        font-style: normal;
        font-weight: normal;
      }
      p{
        font-size: 16px;
        line-height: 22px;
        font-style: normal;
        font-weight: normal;
      }
    }
    &-line-left{
      &:before{
        content: '';
        border: 1px solid black;
        position: absolute;
        left: 30px;
        top: 158px;
        width: 121px;
      }
    }
    &-line-right{
      &:before{
        content: '';
        border: 1px solid black;
        position: absolute;
        right: 20px;
        top: 158px;
        width: 121px;
      }
    }
    &-header{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 100px;
      padding: 0 200px;
      margin-bottom: 200px;
      position: relative;
      &:before{
        content: '';
        border-top: 3px solid;
        position: absolute;
        width: 100%;
        left: 0;
        z-index: 3;
        top: -30px;
      }
    }
    &-item{
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.484615px;
      position: relative;
      z-index: 2;
    }
    &-active{
      color: white;
      &:before{
        content: '';
        height: 122px;
        width: 279px;
        background: #CE4141;
        position: absolute;
        z-index: -1;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      }
    }
  }
</style>
