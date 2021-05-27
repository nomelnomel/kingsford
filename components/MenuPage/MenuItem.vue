<template>
  <section class="dish">
    <div class="dish-name">
      {{ item.title }}
    </div>
    <div class="dish-desc">
      {{ item.desc }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .dish{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: filson-pro, sans-serif;
    &-name{
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 4.5px;
      line-height: 22px;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    &-desc{
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
</style>
