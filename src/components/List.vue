<template>
  <div class="w-80">
    <div
      class="list w-80 px-6 flex-col"
      draggable="true"
      @dragstart.self="pickupList($event, listIndex)"
      @dragover.prevent
      @dragenter.prevent
      @drop.stop="drop($event, list.tasks, listIndex)"
    >
      <div class="list-title py-2 flex justify-between items-center">
        <p class="text-sm font-medium">{{ list.name }}</p>
        <base-icon iconId="ellipsis" class="w-4 h-4 text-gray-400 fill-current" />
      </div>
      <div class="flex h-screen py-1">
        <div class="flex-col overflow-y-auto scroll">
          <task-card
            v-for="(task, index) in list.tasks"
            :key="task.id"
            :board="board"
            :task="task"
            :taskIndex="index"
            :tasks="list.tasks"
            :sourceListIndex="listIndex"
          />
          <base-input-add
            class="w-full mt-4"
            label="Add new task"
            v-model="newTask.name"
            @change="addTask(list.tasks)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue';
import Cuid from 'cuid';
import { mapActions } from 'vuex';

export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
  },
  components: {
    TaskCard,
  },
  data() {
    return {
      newTask: this.createFreshTask(),
    };
  },
  methods: {
    ...mapActions(['createTask', 'moveList', 'moveTask']),
    createFreshTask() {
      const id = Cuid();
      return {
        id,
        name: '',
      };
    },
    addTask(tasks) {
      this.createTask({ tasks, newTask: this.newTask });
      this.newTask = this.createFreshTask();
    },
    pickupList(e, listIndex) {
      e.dataTransfer.effectAllowd = 'move';
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.setData('source-list-index', listIndex);
      e.dataTransfer.setData('type', 'list');
    },
    // eslint-disable-next-line no-unused-vars
    drop(e, toTasks, targetListIndex) {
      const type = e.dataTransfer.getData('type');
      if (type === 'task') {
        this.dropTask(e, toTasks);
      } else {
        const sourceListIndex = e.dataTransfer.getData('source-list-index');
        this.moveList({ sourceListIndex, targetListIndex });
      }
    },
    dropTask(e, toTasks) {
      const sourceListIndex = e.dataTransfer.getData('source-list-index');
      const fromTasks = this.board.lists[sourceListIndex].tasks;
      const sourceTaskIndex = e.dataTransfer.getData('source,task-index');
      this.moveTask({
        fromTasks,
        sourceTaskIndex,
        toTasks,
        targetTaskIndex: 0,
      });
    },
  },
};
</script>

<style scoped></style>
