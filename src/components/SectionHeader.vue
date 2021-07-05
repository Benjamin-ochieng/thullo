<template>
  <div class="flex py-6">
    <div class="flex items-center text-xs text-gray-400">
      <base-icon :iconId="icon" class="w-2.5 h-2.5 fill-current" />
      <p class="mx-2">{{ label }}</p>
    </div>
    <button
      :v-if="showEdit"
      class="
        flex
        items-center
        px-1
        py-1
        rounded-lg
        mx-4
        text-xs text-gray-400
        border border-gray-400
      "
      @click="editTask"
    >
      <base-icon iconId="pencil" class="w-3 h-3 mx-1 fill-current" />
      <p class="mx-2">Edit</p>
    </button>
    <button
      v-if="!showEdit"
      class="
        flex
        items-center
        px-1
        py-1
        rounded-lg
        mx-4
        text-xs text-gray-400
        border border-gray-400
      "
      @click="editTask"
    >
      <base-icon iconId="check" class="w-3 h-3 mx-1 fill-current" />
      <p class="mx-2">Save</p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'doc',
    },
    showEdit: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
