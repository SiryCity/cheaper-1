<template lang='pug'>
  main#main
    div.ad
    illusts-area
    //- div.split
    keyboard-area
</template>

<script>
import IllustsArea from '~/components/IllustsArea.vue'
import KeyboardArea from '~/components/KeyboardArea.vue'
export default {
  components: {
    IllustsArea,
    KeyboardArea
  }
}
</script>


<style lang='stylus' scoped>

#main
  width 95%
  max-width 540px
  height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  justify-content space-evenly
  align-items center

  .ad
    width 320px
    height 80px
    //background-color yellow

  .split
    width 100vw
    height 5px
    box-shadow 0px -5px 5px rgba(51, 51, 51, .5)
</style>

