<template lang="pug">
  header#header
    div.header__h1
      nuxt-link(to='/')
        h1 シャンプーくらべ
    nav.header__nav__wrapper
      nuxt-link.header__nav(to='usage')
        img(src='~/assets/usage.svg')
        p 使い方
      nuxt-link.header__nav(to='app')
        img(src='~/assets/app.svg')
        p アプリ
      nuxt-link.header__nav(to='topics')
        img(src='~/assets/topics.svg')
        p トピック
      nuxt-link.header__nav(to='contact')
        img(src='~/assets/contact.svg')
        p 問い合せ

</template>


<style lang="stylus" scoped>

#header
  width 100%
  height 120px
  color #ddd
  background-color #333

  .header__h1
    width 100%
    height 60px
    line-height 60px
    border-bottom 3px #f442c8 solid
    box-sizing border-box
    a
      margin 0 auto
      color #ddd
      text-decoration none
      h1
        font-size 18px
        color #f442c8
        margin 0
        padding 0
        pointer-events none
        &:first-letter
          font-size 24px

  .header__nav__wrapper
    width 100%
    height 52px
    border-bottom 3px  #f442c8 solid
    display flex
    justify-content center
    .header__nav
      width 25%
      max-width calc(540px / 4 - 4px)
      height 46px

      margin 2px
      color #ccc
      text-decoration none
      
    
    img 
      width auto
      height 20px
      margin 5px 0 -2px
    p
      margin 0
      padding 0
      font-size 12px
</style>
