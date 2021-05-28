<template>
  <div class="test">
    <ul class="menu">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="menu-item"
        @click="current = i"
      >
        <transition name="slide-fade">
          <span v-if="isActive(i)" class="menu-back" />
        </transition>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      items: ['Hello', 'World'],
      current: 0
    }
  },
  methods: {
    isActive (i) {
      return i === this.current
    }
  }
}
</script>

<style scoped lang="scss">
.test {
  height: 100vh;
  margin-top: 200px;
  border-top: 1px solid;
  padding-top: 20px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &-item {
    margin-right: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    position: relative;
  }

  &-back {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -75%;
    left: -25%;
    background: #7f828b2e;
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

   .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
  .slide-fade-enter{
    opacity: 0;
  }

}

</style>
