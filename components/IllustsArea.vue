<template lang="pug">
  div#illusts-area
    div.illusts-area__results
      p {{$store.getters['main/results'].left}}
    div.illusts-area__results
      p {{$store.getters['main/results'].right}}
    
    div.illusts-area__quantity
      img(src='~/assets/bottle.svg' alt='')
      p
        | {{$store.state.main.leftQuantity}}
        span g
    div.illusts-area__quantity
      img(src='~/assets/bottle.svg' alt='')
      p
        | {{$store.state.main.rightQuantity}}
        span g

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
    position relative
    img
      width auto
      height 100%
      position absolute
      left 0
      right 0
      bottom 0
      margin auto
      transition-duration .2s
      transition-property height
    p
      position absolute
      left 0
      right 0
      bottom 50%
      margin auto
      color #ddd
      font-size 20px
      transition-duration .2s
      transition-property bottom
      span
        font-size 90%
      
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
        span
          font-size 90%
</style>
