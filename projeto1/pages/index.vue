<template>
  <div>
    <pre>{{ $store.state.user }}</pre>
    <pre>{{ user }}</pre>
    <br>
    <br>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper>
        Help me fund my Open Source work!
      </template>
    </VTooltip>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'IndexPage',
  mounted() {
    console.log(this.$name('JOSEMALCHER'))
    console.log(this.$dayjs().format())
  },
  computed:{
    ...mapState(({
      user: state => state.user,

    }))
  }
}
</script>
