<template lang="pug">
  div.switch-button(
    :class=`{
      "switch-button--quantity-left": $store.state.main.chosenArea === "leftQuantity",
      "switch-button--quantity-right": $store.state.main.chosenArea === "rightQuantity",
      "switch-button--price-left": $store.state.main.chosenArea === "leftPrice",
      "switch-button--price-right": $store.state.main.chosenArea === "rightPrice",
    }`
    @click='$store.commit("main/switchArea", area)'
  )
    div img
    //- img(src='~/assets/bottle.svg' alt='')
</template>

<script>
export default {
  props: ['area']
}
</script>

<style lang="stylus" scoped>
.switch-button
  width calc(100% / 5 - 4px)
  height calc(100% / 2 - 4px)
  margin 2px
  display flex
  justify-content center
  align-items center
  border-radius 2px
  box-shadow 0 3px 6px #999
  cursor pointer
  img
    width 80%
    height auto


.switch-button--quantity-left
  background-color var(--color-quantity-left)
.switch-button--quantity-right
  background-color var(--color-quantity-right)
.switch-button--price-left
  background-color var(--color-price-left)
.switch-button--price-right
  background-color var(--color-price-right)
</style>
