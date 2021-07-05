<template>
  <Nav />
  <router-view />
</template>
<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>
<style>
#app {
  @apply px-6 font-inter text-gray-900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
