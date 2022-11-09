<template>
  <div>
    <div class="bg-gray-100 ">
      <div class="container mx-auto flex items-center h-10 mb-10 space-x-4">
        <NuxtLink :to="{name: 'a-empresa'}">A Empresa</NuxtLink>
        <NuxtLink to="/servicos">Serviços</NuxtLink>
        <NuxtLink to="/produtos">Produtos</NuxtLink>
      </div>
    </div>
    <div>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
