<template lang="pug">
  header#header
    nuxt-link.header__nav(to='') aaaa
    nuxt-link.header__nav(to='') aaaa
    nuxt-link.header__nav(to='') aaaa
    nuxt-link.header__nav(to='') aaaa

    div.header__h1
      nuxt-link(to='')
        h1 どっちがおとく?
</template>


<style lang="stylus" scoped>

#header
  width 100%
  height 60px
  color #ddd
  background-color #333
  display flex
  justify-content center
  position relative
  z-index 2
  .header__nav
    width calc(25% - 4px)
    max-width 56px
    height 56px
    margin 2px
    color #ccc
    text-decoration none
  .header__h1
    width 70%
    margin 0 auto
    height 30px
    line-height 30px
    border-radius 0 0 15px 15px/ 0 0 15px 15px
    position absolute
    left 0
    right 0
    top 60px
    background-color #333
    z-index 1
    a
      display block
      color #ddd
      text-decoration none
      h1
        font-size 18px
        margin 0
        padding 0
        pointer-events none
        &:first-letter
          color #f442c8
          font-size 24px
</style>
