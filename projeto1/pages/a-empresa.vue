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
        <h1 class="text-lg font-bold">A Empresa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium feugiat sapien, eget faucibus quam posuere et. Duis odio eros, tristique sit amet lorem porttitor, porttitor imperdiet ex. Donec malesuada leo a scelerisque molestie. Nam eu aliquam eros. Aliquam erat volutpat. Vivamus cursus dolor nec blandit rhoncus. Sed vitae felis eu risus consectetur placerat. Cras consectetur nunc eget diam tempor, vitae porta enim ultricies. Mauris non maximus ipsum. Donec egestas sollicitudin sem, et cursus nunc malesuada eu.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-empresa"
}
</script>

<style scoped>

</style>
