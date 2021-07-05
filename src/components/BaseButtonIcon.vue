<template>
  <button
    class="
      flex
      items-center
      px-4
      py-2
      bg-gray-200
      rounded-lg
      text-xs text-gray-400
      focus:outline-none
    "
  >
    <base-icon :iconId="icon" class="w-2 h-2 mr-1.5 fill-current" />
    <p class="">{{ label }}</p>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
