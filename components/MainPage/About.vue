<template>
  <div class="about">
    <div class="about-main">
      donec vulputate libero sed
      euismod blandit. proin
      pharetra ultricies metus,
      suscipit placerat sem mollis
      ut. vestibulum convallis in
      libero sed convallis.
    </div>
    <div class="about-text">
      Pellentesque porttitor condimentum orci, ut semper
      nibh finibus commodo. Pellentesque risus mauris,
      facilisis non elementum maximus, euismod a velit.
      Curabitur iaculis ex lorem, quis consequat mauris
      mattis vitae. Quisque tincidunt dolor et tellus
      pretium, eu accumsan arcu iaculis.

      <nuxt-link to="menu">
        SEE OUR MENU
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">

.about{
  display: flex;
  justify-content: space-between;
  margin: 100px;
  &-main{
    font-size: 18px;
    text-transform: uppercase;
    text-align: left;
    margin-right: 30px;
  }
  &-text{
    font-size: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;

    a{
      color: red;
      margin-top: auto;
      font-size: 14px;
    }
  }
}

</style>
