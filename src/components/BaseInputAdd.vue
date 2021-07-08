<template>
  <div id="search" class="relative" v-bind="$attrs">
    <div class="px-3 absolute flex items-center inset-y-0 right-0 text-blue-500">
      <base-icon iconId="plus" class="w-4 h-4 fill-current" />
    </div>
    <input
      type="text"
      :placeholder="label"
      class="
        w-full
        pl-2
        pr-8
        py-3
        focus:outline-none
        rounded-lg
        shadow-lg
        placeholder-blue-500
        text-sm text-blue-500
        bg-blue-200
      "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
