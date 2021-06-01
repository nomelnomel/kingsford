<template>
  <section class="menu">
    <ul class="menu-header">
      <li
        v-for="(item,i) in menu"
        :key="item.id"
        class="menu-item"
        :class="{'menu-active': isActive(i)}"
        @click="emitWidth($event); showCurrentMenu(i)"
      >
        {{ item.title }}
      </li>
      <transition :name="direction">
        <span class="tab-indicator" :style="getStyle" />
      </transition>
    </ul>
    <MenuSection
      v-for="section in currentMenuPage.sections"
      :key="section.id"
      :section="section"
    />
  </section>
</template>

<script>
import MenuSection from './MenuSection'

export default {
  name: 'MenuMain',
  components: {
    MenuSection
  },
  props: {
    menu: {
      type: Array,
      default: () => {
      },
      required: true
    }
  },
  data () {
    return {
      current: 0,
      direction: '',
      indicator_width: 0,
      indicator_pos: 0
    }
  },
  computed: {
    currentMenuPage () {
      return this.menu[this.current]
    },
    getStyle () {
      return {
        left: this.indicator_pos + 'px',
        width: this.indicator_width + 'px'
      }
    }
  },
  mounted () {
    const first = document.querySelector('.menu-active')
    this.indicator_width = first.offsetWidth + 40
    this.indicator_pos = first.offsetLeft - 20
  },
  methods: {
    showCurrentMenu (i) {
      this.current > i ? this.direction = 'to left' : this.direction = 'to right'
      this.currentMenuPage = this.menu[i]
      this.current = i
    },
    emitWidth (e) {
      this.indicator_width = e.target.offsetWidth + 40
      this.indicator_pos = e.target.offsetLeft - 20
    },
    isActive (i) {
      return i === this.current
    }
  }
}
</script>

<style lang="scss">
.menu {
  &-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    padding: 0 10%;
    margin-bottom: 100px;
    position: relative;
    list-style: none;
    @media screen and (max-width: $bpM) {
      //  padding: 50px 0 0;
      //  overflow-x: scroll;
      //  overflow-y: hidden;
      padding: 0;
    }

    &:before {
      content: '';
      border-top: 3px solid $secondary;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 3;
      top: -30px;
      @media screen and (max-width: $bpT) {
        top: -20px;
      }
      @media screen and (max-width: $bpM) {
        top: -10px;
      }
    }
  }

  &-item {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.484615px;
    position: relative;
    z-index: 2;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: $bpT) {
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: $bpM) {
      //min-width: 50%;
      font-size: 14px;
      line-height: 16px;
    }
  }

  &-active {
    color: $primary;
  }
}

.tab-indicator {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: $contrast;
  width: 200px;
  height: 80px;
  transition: all .7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(-100%);
  z-index: 0;
}

$percentage: 40%;

// Forwards transition
//.to-right-enter {
//  opacity: 0;
//  transform: translateX($percentage);
//}
//
//.to-right-enter-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//}
//
//.to-right-leave-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//  opacity: 0;
//  transform: translateX(-$percentage);
//}
//
//// Backwards transition
//
//.to-left-back-enter {
//  opacity: 0;
//  transform: translateX(-$percentage);
//}
//
//.to-left-enter-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//}
//
//.to-left-leave-active {
//  transition: all .6s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
//  opacity: 0;
//  transform: translateX($percentage);
//}
</style>
