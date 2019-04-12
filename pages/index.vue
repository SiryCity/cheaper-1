<template lang='pug'>
  main#main
    div.ad
    section#calendar__wrapper
      div#calendar
    div.ad
</template>


<style lang='stylus' scoped>

#main //ヘッダーとフッター以外の全て
  width 1920px
  max-width 95%
  display flex
  flex-direction column
  align-items center

  #calendar__wrapper //カレンダーの部分のラッパー
    width 100%
    height calc(var(--static100vh) - 80px - 80px - 80px) //1画面分からヘッダーと広告を抜く
    min-height 400px
    display flex
    flex-direction column
    align-items center
    justify-content flex-end

    #calendar //カレンダーの部分
      width var(--calendar-length)
      height var(--calendar-length)
      display flex
      flex-wrap wrap
      justify-content flex-start
      align-content center

.ad
  width 320px
  height 80px


</style>

