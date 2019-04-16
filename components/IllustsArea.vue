<template lang="pug">
  div#illusts-area
    //- 結果(高いか安いか)を表示
    div.illusts-area__results
      p {{$store.getters['main/results'].left}}
    div.illusts-area__results
      p {{$store.getters['main/results'].right}}
    
    //- 量をシャンプーのボトルで表示
    div.illusts-area__quantity
      img(
        src='~/assets/bottle.svg'
        alt=''
        :style='{"height": `${$store.getters["main/quantityRatio"].left}%`}'
        @click='$store.commit("main/switchArea", "leftQuantity")'
      )
      p.illusts-area__quantity__left
        span(:class=`{
          "blinking": $store.state.main.chosenArea === "leftQuantity"
        }`) {{$store.state.main.leftQuantity}}
        span g
    div.illusts-area__quantity
      img(
        src='~/assets/bottle.svg'
        alt=''
        :style='{"height": `${$store.getters["main/quantityRatio"].right}%`}'
        @click='$store.commit("main/switchArea", "rightQuantity")'
      )
      p.illusts-area__quantity__right
        span(:class=`{
          "blinking": $store.state.main.chosenArea === "rightQuantity"
        }`) {{$store.state.main.rightQuantity}}
        span g

    //- 値段を看板で表示
    div.illusts-area__price(@click='$store.commit("main/switchArea", "leftPrice")')
      p.illusts-area__price__left
        span ￥
        span(:class=`{
          "blinking": $store.state.main.chosenArea === "leftPrice"
        }`) {{$store.state.main.leftPrice}}
    
    div.illusts-area__price(@click='$store.commit("main/switchArea", "rightPrice")')
      p.illusts-area__price__right
        span ￥
        span(:class=`{
          "blinking": $store.state.main.chosenArea === "rightPrice"
          }`) {{$store.state.main.rightPrice}}
</template>

<style lang='stylus' scoped>
#illusts-area
  width 100%
  max-width 540px
  height calc(100% - 250px - 80px - 5px)
  display flex
  flex-wrap wrap
  justify-content space-around
  align-content space-evenly

  .illusts-area__results
    width 35%
    height 15%
    display flex
    justify-content center
    align-items center
    p
      font-weight bold
      font-size 20px
    
  .illusts-area__quantity
    width 35%
    height 60%
    position relative
    display flex
    justify-content center
    align-items flex-end
    img
      width auto
      transition-duration .2s
      transition-property height
      cursor pointer
    p
      position absolute
      left 0
      right 0
      bottom 20%
      margin auto
      color #ddd
      font-size 20px
      span
        &:nth-child(2)
          font-size 80%

    .illusts-area__quantity__left
      color var(--color-quantity-left)
    .illusts-area__quantity__right
      color var(--color-quantity-right)
      
  .illusts-area__price
    width 35%
    height 13%
    display flex
    justify-content space-around
    align-items center
    background-color #333
    border-radius 2px
    cursor pointer

    p
      color #ddd
      font-size 20px
      span
        &:nth-child(1)
          font-size 80%

    .illusts-area__price__left
      color var(--color-price-left)
    .illusts-area__price__right
      color var(--color-price-right)

.blinking
  animation blink .5s linear infinite alternate

@keyframes blink
  0%
    background-color unset
  100%
    background-color #ddd
</style>
