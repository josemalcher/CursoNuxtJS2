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
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>
        <ul>
          <li><NuxtLink to="/servicos/desenvolvimento-de-sites">Desenvolvimento sites</NuxtLink></li>
          <li><NuxtLink to="/servicos/Sistemas-Web">Sistemas Web</NuxtLink></li>
        </ul>
        <br><br>
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicos"
}
</script>

<style scoped>

</style>
