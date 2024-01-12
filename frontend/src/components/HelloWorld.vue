<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">

    <h1 class="text-3xl font-bold underline mt-4">
      Hello World with Vue 3, Tailwind CSS, and FontAwesome!
    </h1>
    <font-awesome-icon :icon="['fas', 'user-secret']" size="4x" class="text-blue-500" />
    <font-awesome-icon :icon="['fas', 'coffee']" size="4x" class="text-blue-500" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
/* Additional styles if needed */
</style>
