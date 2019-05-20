<template lang="pug">
  div
    common-documents(
      title='トピック'
      subTitle='アプリに関連する情報など'
      :image='favicon'
    )
    //-
      nuxt-link.columns__box(to='./columns/column1')
        p 2019-05-01
        h4 a
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import favicon from '~/assets/favicon.svg'
export default {
  head: () => 
    ({
      title: 'トピック',
    }),
  components:{
    CommonDocuments
  },
  computed:{
    favicon: () => favicon
  },
}
</script>

<style lang="stylus" scoped>

.columns__box
  width 100%
  margin-top 40px
  color #333
  text-decoration none
  border-left 7px solid #f442c8
  padding-left 7px
  transition-duration .2s
  transition-property background-color
  h4
    font-size 18px
    margin 0 0 3px
  p
    margin 3px 0 8px
  &:hover
    background-color #8ecc9b
</style>
