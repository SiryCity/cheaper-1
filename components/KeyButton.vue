<template lang="pug">
  div.key-button(@click='$store.commit("main/inputNum", v)') {{v}}
    
</template>

<script>
export default {
  props: ['v']
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
</style>
