<template>
  <div
    class="task-card w-64 p-3 mt-4 bg-white rounded-xl flex flex-col"
    @click="showTask(task)"
    draggable="true"
    @dragstart="pickupTask($event, taskIndex, sourceListIndex)"
    @drop.stop="drop($event, tasks, taskIndex)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="task-cover w-full h-32 my-3 rounded-xl relative" v-if="task.cover">
      <img
        :src="task.cover"
        alt="item image"
        class="w-full h-32 absolute inset-0 object-cover rounded-xl"
      />
    </div>
    <div class="item my-3">
      <p class="text-sm text-left">{{ task.name }}</p>
    </div>
    <div class="item-labels my-3 flex justify-start">
      <base-label v-for="(label, index) in task.labels" :key="index" :label="label" />
    </div>
    <div class="item-metadata my-3 flex justify-between items-end">
      <div class="item-members">
        <base-profile-picture
          class="w-7 h-7 mr-2"
          v-for="member in task.members"
          :key="member.id"
          :imgSrc="member.image"
        />
        <base-button icon="plus" class="w-7 h-7" />
      </div>
      <div class="item-notifications flex items-center">
        <div
          class="comment-notification px-1 text-xs text-gray-400 flex justify-between items-center"
        >
          <p class="text-xs mx-1">2</p>
          <base-icon iconId="comment" class="w-3 h-3 fill-current" />
        </div>
        <div
          class="
            attachment-notification
            px-1
            text-xs text-gray-400
            flex
            justify-between
            items-center
          "
        >
          <p class="text-xs mx-1">1</p>
          <base-icon iconId="clip" class="w-3 h-3 fill-current" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    tasks: {
      type: Array,
    },
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    sourceListIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(['moveTask']),
    showTask(task) {
      this.$router.push({ name: 'task', params: { id: task.id } });
    },
    pickupTask(e, taskIndex, sourceListIndex) {
      e.dataTransfer.effectAllowd = 'move';
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.setData('source-task-index', taskIndex);
      e.dataTransfer.setData('source-list-index', sourceListIndex);
      e.dataTransfer.setData('type', 'task');
    },
    // eslint-disable-next-line no-unused-vars
    drop(e, toTasks, targetTaskIndex) {
      console.log('Drop task called!');
      const sourceListIndex = e.dataTransfer.getData('source-list-index');
      const fromTasks = this.board.lists[sourceListIndex].tasks;
      const sourceTaskIndex = e.dataTransfer.getData('source-task-index');
      const type = e.dataTransfer.getData('type');
      if (type === 'list') return;
      this.moveTask({
        fromTasks,
        sourceTaskIndex,
        toTasks,
        targetTaskIndex,
      });
    },
  },
  computed: {
    ...mapState(['board']),
  },
};
</script>

<style lang="scss" scoped></style>
