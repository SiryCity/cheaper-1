<template lang='pug'>
  div#root
    header-bar
    nuxt
    footer#footer &copy; 2019 シャンプーくらべ
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
export default {
  components: {
    HeaderBar,
  },
  mounted(){
    this.$store.commit('mounted/setStatic100vh')
  }
}
</script>

<style lang='stylus'>

html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  font-weight bold
*
*before
*after
  box-sizing border-box
  margin 0

body
  margin 0

:root
  --static100vh 100vh

#root
  width 100%
  overflow hidden
  color #333
  background-color #ddd
  text-align center
  display flex
  flex-direction column
  align-items center
  position relative

#footer
  width 100%
  height 20px
  line-height 20px
  color #ddd
  background-color #333


</style>