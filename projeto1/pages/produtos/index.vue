<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">PRODUTOS</h1>
        <div class="container mx-auto flex items-center h-10 mb-10 space-x-4">
          <NuxtLink to="/produtos/produto-a">PRODUTO A</NuxtLink>
          <NuxtLink to="/produtos/produto-b">PRODUTO A</NuxtLink>
        </div>
        <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-3">
          {{ product.title }}
        </div>
        <!--        <pre>-->
        <!--            {{ products }}-->
        <!--          </pre>-->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "produtos",
  data() {


  },
  async asyncData({$axios}) {
    //  await new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve()
    //     console.log('PROMISE RESOLVIDA')
    //   }, 3000)
    // })
    const products = await $axios.$get('posts')
    // return{
    //   products: [
    //     {name: 'produto-a'},
    //     {name: 'produto-b'}
    //   ]
    // }
    return {products}
  }
}
</script>

<style scoped>

</style>
