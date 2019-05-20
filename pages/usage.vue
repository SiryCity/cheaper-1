<template lang="pug">
  div
    common-documents(
      title='シャンプーくらべ'
      subTitle='使い方'
      :image='favicon'
      :md='usage'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import usage from '~/assets/md/usage.md'
import favicon from '~/assets/favicon.svg'
export default {
  head: () => 
    ({
      title: '使い方',
    }),
  components:{
    CommonDocuments
  },
  computed:{
    usage: () => usage,
    favicon: () => favicon
  }
}
</script>