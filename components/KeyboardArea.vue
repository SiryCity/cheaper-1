<template lang="pug">
  div#keyboards-area
    key-button(
      v-for='v in $store.getters["main/getKeyboard"]'
      :key='`tenkey-${v}`'
      :v='v'
    )
</template>

<script>
import KeyButton from '~/components/KeyButton.vue'
export default {
  components: {
    KeyButton,
  },
}
</script>

<style lang='stylus' scoped>
#keyboards-area
  width 300px
  max-width 100%
  height 200px
  display flex
  flex-wrap wrap
  justify-content flex-end
</style>
