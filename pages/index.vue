<template lang='pug'>
  main#main
    div#illusts-area
    div#keyboard-area
    div.ad
</template>


<style lang='stylus' scoped>

#main
  width 95%
  max-width 540px
  height calc(var(--static100vh) - 80px)
  display flex
  flex-direction column
  justify-content flex-end
  align-items center

  #illusts-area
    width var(--illusts-area-width)
    max-width 100%
    height var(--illusts-area-height)
    margin-bottom 10px
    background-color blue
  #keyboard-area
    width var(--keyboard-area-width)
    max-width 100%
    height var(--keyboard-area-height)
    margin-bottom 10px
    background-color cyan

.ad
  width 320px
  height 80px
  background-color orange


</style>

