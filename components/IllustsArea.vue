<template lang="pug">
  div#illusts-area
    div.illusts-area__results
      p 判定
    div.illusts-area__results
      p 判定
    div.illusts-area__quantity
    div.illusts-area__quantity
    div.hr
    div.illusts-area__price
      div.illusts-area__price__tag
        p 111
    div.illusts-area__price
      div.illusts-area__price__tag
        p 111
</template>

<style lang='stylus' scoped>
#illusts-area
  width var(--illusts-area-width)
  max-width 100%
  height var(--illusts-area-height)
  display flex
  flex-wrap wrap
  justify-content space-between
  align-content space-evenly

  .illusts-area__results
    width calc(50% - 5px)
    height 15%
    display flex
    justify-content center
    align-items center

    p
      font-weight bold
      font-size 20px
    
  .illusts-area__quantity
    width calc(50% - 5px)
    height 70%
    background-color orange
  
  .hr
    width 100%
    height 5%
    margin 0
    padding 0
    border-bottom 3px solid #333

  .illusts-area__price
    width calc(50% - 5px)
    height 15%
    display flex
    justify-content center

    .illusts-area__price__tag
      width 80%
      height 80%
      background-color #333
      display flex
      justify-content center
      align-items center

      p
        color #ddd
        font-size 20px
</style>
