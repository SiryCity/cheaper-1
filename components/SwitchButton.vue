<template lang="pug">
  div.key-button
    div img
    
</template>

<script>
export default {
  props: ['i']
}
</script>

<style lang="stylus" scoped>
.key-button
  width calc(100% / 5 - 4px)
  height calc(100% / 2 - 4px)
  margin 2px
  display flex
  justify-content center
  align-items center
  border-radius 2px
  box-shadow 0 3px 6px #999
</style>
