<template>
  <div class="lebel px-2 mr-2 rounded-3xl bg-blue-200">
    <p class="text-xxs text-blue-500">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
