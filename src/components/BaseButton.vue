<template>
  <button class="rounded-full focus:outline-none relative bg-blue-500" v-bind="$attrs">
    <span class="absolute inset-0 h-full text-white justify-center flex items-center">
      <base-icon :iconId="icon" class="w-3.5 h-3.5 fill-current" />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
