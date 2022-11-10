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


    <br><br>
    <pre>
    {{ $config }}
</pre>
  </div>


</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'IndexPage',
  asyncData({$config}){
    console.log($config)
  },
  created() {
    console.log(this.$config.youyube_api)
    console.log(this.$config.facebook_API)
  },
  mounted() {
    console.log(this.$name('JOSEMALCHER'))
    console.log(this.$dayjs().format())
  },
  computed: {
    ...mapState(({
      user: state => state.user,

    }))
  }
}
</script>
