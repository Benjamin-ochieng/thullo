<template>
  <Nav />
  <Header />
  <router-view />
</template>
<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Nav,
    Header,
  },
};
</script>
<style lang="postcss">
body,
html {
  height: 100%;
}
#app {
  @apply h-full px-6 font-inter text-gray-900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
