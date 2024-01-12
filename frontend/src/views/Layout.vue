<template>
  <div class="bg-blue-500 p-4">
    <nav class="flex justify-center space-x-4">
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/about" class="text-white">About</router-link>
    </nav>
  </div>
  <div class="container mx-auto p-4">
    <!-- This is where the router views will be displayed -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
};
</script>

<style scoped>
/* Add any additional styling specific to your layout here */
</style>
