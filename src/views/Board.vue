<template>
  <div id="board" class="px-4 py-6 bg-gray-200 rounded-xl flex">
    <div class="flex flex-nowrap overflow-x-auto min-w-full">
      <list
        v-for="(list, index) in board.lists"
        :key="index"
        :board="board"
        :list="list"
        :listIndex="index"
      />
      <div class="">
        <base-input-add
          class="w-64"
          label="Add a new list"
          v-model="newList.name"
          @change="addList()"
        />
      </div>
    </div>
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
import Cuid from 'cuid';
import { mapState, mapActions } from 'vuex';
import List from '@/components/List.vue';

export default {
  components: {
    List,
  },
  data() {
    return {
      newList: this.createFreshList(),
    };
  },
  methods: {
    ...mapActions(['createList']),
    createFreshList() {
      const id = Cuid();
      return {
        id,
        name: '',
        tasks: [],
      };
    },
    addList() {
      this.createList(this.newList);
      this.newList = this.createFreshList();
    },
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
