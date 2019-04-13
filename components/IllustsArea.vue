<template lang="pug">
  div#illusts-area
    div.illusts-area__results
      p 判定
    div.illusts-area__results
      p 判定
    div.illusts-area__quantity
    div.illusts-area__quantity
    div.illusts-area__price
      div.illusts-area__price__tag
        p
          span ￥
          | {{$store.state.main.leftPrice}}
    div.illusts-area__price
      div.illusts-area__price__tag
        p
          span ￥
          | {{$store.state.main.rightPrice}}
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
    height calc(15% - 5px)
    display flex
    justify-content center
    align-items center

    p
      font-weight bold
      font-size 20px
    
  .illusts-area__quantity
    width calc(50% - 5px)
    height calc(70% - 5px)
    background-color orange
  
  .illusts-area__price
    width calc(50% - 5px)
    height calc(15% - 5px)
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
