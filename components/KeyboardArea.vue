<template lang="pug">
  div#keyboards-area
    switch-button(area='leftQuantity')
    switch-button(area='leftPrice')
    div#keyboards-area__tenkey
      key-button(
        v-for='(v, i) in Array(11).fill()'
        :key='`tenkey-${i}`'
        :i='i'
      )
    switch-button(area='rightQuantity')
    switch-button(area='rightPrice')
</template>

<script>
import KeyButton from '~/components/KeyButton.vue'
import SwitchButton from '~/components/SwitchButton.vue'
export default {
  components: {
    KeyButton,
    SwitchButton
  },
}
</script>

<style lang='stylus' scoped>
#keyboards-area
  width 250px
  max-width 100%
  height 200px
  display flex
  flex-wrap wrap
  flex-direction column
  #keyboards-area__tenkey
    width 60%
    height 100%
    display flex
    flex-wrap wrap
    justify-content flex-end
</style>
