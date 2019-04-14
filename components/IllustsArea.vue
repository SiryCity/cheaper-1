<template lang="pug">
  div#illusts-area
    div.illusts-area__results
      p {{$store.getters['main/results'].left}}
    div.illusts-area__results
      p {{$store.getters['main/results'].right}}
    
    div.illusts-area__quantity
      img(
        src='~/assets/bottle.svg'
        alt=''
        :style='{"height": `${$store.getters["main/quantityRatio"].left}%`}'
      )
      p.illusts-area__quantity__left
        | {{$store.state.main.leftQuantity}}
        span g
    div.illusts-area__quantity
      img(
        src='~/assets/bottle.svg'
        alt=''
        :style='{"height": `${$store.getters["main/quantityRatio"].right}%`}'
      )
      p.illusts-area__quantity__right
        | {{$store.state.main.rightQuantity}}
        span g

    div.illusts-area__price
      p.illusts-area__price__left
        span ￥
        | {{$store.state.main.leftPrice}}
    div.illusts-area__price
      p.illusts-area__price__right
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
  justify-content space-around
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
      bottom 30%
      margin auto
      color #ddd
      font-size 20px
      span
        font-size 80%

    .illusts-area__quantity__left
      color #f2a9cd
    .illusts-area__quantity__right
      color #c7dd6c
      
  .illusts-area__price
    width calc(35% - 5px)
    height calc(15% - 5px)
    display flex
    justify-content space-around
    align-items center
    background-color #333

    p
      color #ddd
      font-size 20px
      span
        font-size 80%

    .illusts-area__price__left
      color #d34a6a
    .illusts-area__price__right
      color #7dc14f
</style>
