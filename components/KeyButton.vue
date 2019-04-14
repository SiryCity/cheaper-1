<template lang="pug">
  div.key-button(
    :class=`{
      "key-button--quantity-left": $store.state.main.chosenArea === "leftQuantity",
      "key-button--quantity-right": $store.state.main.chosenArea === "rightQuantity",
      "key-button--price-left": $store.state.main.chosenArea === "leftPrice",
      "key-button--price-right": $store.state.main.chosenArea === "rightPrice",
    }`
    @click='$store.commit("main/inputNum", i + 1)'
  )
    div {{i === 10 ? 'C' : i === 9 ? 0 : i + 1}}
    
</template>

<script>
export default {
  props: ['i']
}
</script>

<style lang="stylus" scoped>
.key-button
  width calc(100% / 3 - 4px)
  height calc(100% / 4 - 4px)
  margin 2px
  display flex
  justify-content center
  align-items center
  border-radius 2px
  box-shadow 0 3px 6px #999
  cursor pointer

.key-button--quantity-left
  background-color var(--color-quantity-left)
.key-button--quantity-right
  background-color var(--color-quantity-right)
.key-button--price-left
  background-color var(--color-price-left)
.key-button--price-right
  background-color var(--color-price-right)
</style>
