<template>
  <Header />
  <div class="px-4 py-6 bg-gray-200 rounded-xl flex flex-grow justify-start">
    <list v-for="(list, index) in board.lists" :key="index" :list="list" :listIndex="index" />
  </div>
  <div
    class="absolute inset-0 pin z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center"
    v-if="taskIsOpened"
    @click.self="closeTask"
  >
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';

export default {
  components: {
    Header,
    List,
  },
  methods: {
    closeTask() {
      return this.$router.push({ name: 'board' });
    },
  },
  computed: {
    ...mapState(['board']),
    taskIsOpened() {
      return this.$route.name === 'task';
    },
  },
};
</script>

<style scoped></style>
