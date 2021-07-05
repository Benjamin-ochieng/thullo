<template>
  <div class="rounded-full relative bg-gray-300" v-bind="$attrs">
    <div class="absolute inset-0 text-white justify-center flex items-center">PM</div>
    <img
      v-if="imgSrc"
      :src="imgSrc"
      alt="User's photo"
      class="absolute inset-0 h-full object-cover rounded-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
