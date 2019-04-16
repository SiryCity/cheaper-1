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
        @click='$store.commit("main/switchArea", "leftQuantity")'
      )
      p
        span(:class=`{
          "selected": $store.state.main.chosenArea === "leftQuantity"
          && !$store.state.main.isSelectedAll,
          "selected-all": $store.state.main.chosenArea === "leftQuantity"
          && $store.state.main.isSelectedAll
        }`) {{$store.state.main.leftQuantity}}
        span g
    div.illusts-area__quantity
      img(
        src='~/assets/bottle.svg'
        @click='$store.commit("main/switchArea", "rightQuantity")'
      )
      p
        span(:class=`{
          "selected": $store.state.main.chosenArea === "rightQuantity"
          && !$store.state.main.isSelectedAll,
          "selected-all": $store.state.main.chosenArea === "rightQuantity"
          && $store.state.main.isSelectedAll
        }`) {{$store.state.main.rightQuantity}}
        span g

    //- 値段を看板で表示
    div.illusts-area__price(@click='$store.commit("main/switchArea", "leftPrice")')
      p
        span ￥
        span(:class=`{
          "selected": $store.state.main.chosenArea === "leftPrice"
          && !$store.state.main.isSelectedAll,
          "selected-all": $store.state.main.chosenArea === "leftPrice"
          && $store.state.main.isSelectedAll
        }`) {{$store.state.main.leftPrice}}
    
    div.illusts-area__price(@click='$store.commit("main/switchArea", "rightPrice")')
      p
        span ￥
        span(:class=`{
          "selected": $store.state.main.chosenArea === "rightPrice"
          && !$store.state.main.isSelectedAll,
          "selected-all": $store.state.main.chosenArea === "rightPrice"
          && $store.state.main.isSelectedAll
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
      height 100%
      cursor pointer
    p
      position absolute
      left 0
      right 0
      bottom 20%
      margin auto
      color #ddd
      font-size 20px
      pointer-events none
      span
        &:nth-child(1)
          border-right transparent 3px solid
        &:nth-child(2)
          font-size 80%
      
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
      pointer-events none
      span
        &:nth-child(1)
          font-size 80%
        &:nth-child(2)
          border-right transparent 3px solid

.selected-all
  animation blink-all .4s linear infinite alternate

@keyframes blink-all
  0%
    background-color unset
  100%
    background-color #f442c8

.selected
  animation blink-right .4s linear infinite alternate

@keyframes blink-right
  0%
    border-right transparent 3px solid
  100%
    border-right #f442c8 3px solid
</style>
