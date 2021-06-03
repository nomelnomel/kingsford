<template>
  <section class="dish">
    <div class="dish-name">
      {{ item.menu_item }}
    </div>
    <p class="dish-desc">
      {{ item.meni_item_description }}
    </p>
    <p class="dish-price">
      {{ item.price }}$
    </p>
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
@import "@/assets/base/breakpoints";
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
      @include media('<mobile'){
        margin-bottom: 10px;
      }
    }
    &-desc{
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &-price{
      font-size: 20px;
      font-weight: bold;
      color: $contrast;
      display: block;
      margin-top: 10px;
    }
  }
</style>
