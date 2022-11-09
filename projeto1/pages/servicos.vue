<template>
  <div>
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
