<template lang="pug">
  div
    common-documents(
      title='アプリについて'
      :image='favicon'
      :md='privacy'
    )
</template>

<script>
import CommonDocuments from '~/components/CommonDocuments'
import privacy from '~/assets/md/privacy.md'
import favicon from '~/assets/favicon.svg'
export default {
  head: () => 
    ({
      title: 'アプリについて',
    }),
  components:{
    CommonDocuments
  },
  computed:{
    privacy: () => privacy,
    favicon: () => favicon
  }
}
</script>