<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>
        <ul>
          <li>
            <NuxtLink to="/servicos/desenvolvimento-de-sites">Desenvolvimento sites</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/servicos/Sistemas-Web">Sistemas Web</NuxtLink>
          </li>
        </ul>
        <br><br>
        <NuxtChild/>
      </div>
      <br><br>
      <pre>{{ $fetchState }}</pre>


      <div v-if="$fetchState.pending">
        carregando...
      </div>
      <div v-else>
        <div v-for="service in services" :key="service.id" class="border-b border-gray-400 py-4">
          {{ service.username }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "servicos",
  // middleware() {
  //   console.log('middleware SERVICOS ATIVADO...')
  // },
  head(){
    return {
      title: this.title,
      meta: [
        {hid: 'description', name: 'description', content: 'Projeto te teste - Página de Serviços' }
      ],
      bodyAttrs:{
        class: 'bg-gray-400'
      }
    }
  },
  data() {
    return {
      services: [],
      title: ''
    }
  },
  async fetch() {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 3000)
    // })
    // console.log(this)
    this.services = await this.$axios.$get('users')
  },
  created() {
    this.getTitle()
  },
  methods:{
    getTitle(){
      setTimeout(()=>{
        this.title = 'Serviços'
      }, 3000)
    }
  }

}
</script>

<style scoped>

</style>
