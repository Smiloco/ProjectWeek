<template >
   
  <div class="container">
  <div class="font-header">
      <h1 class="font-header">Our products</h1>
    </div>
    <div class="container">
      <div class="row">
        <Item v-for="product in products" 
        :key="product.id"
        :item="product"/>
      </div>
    </div>  
  </div>
</template>
    
<script>
// @ is an alias to /src
import Item from "@/Item.vue"  
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
  .font-header {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 250%;
  color: white;
  font-family: "Teko", sans-serif;
  text-align:center;
}
</style>