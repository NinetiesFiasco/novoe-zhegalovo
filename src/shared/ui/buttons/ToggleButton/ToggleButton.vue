<script lang="ts" setup>
type Props = {
  text: string
  value: string
  isActive: boolean
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: "setActive", value: string): void
}>()

const setActive = () => {
  emit("setActive", props.value)
}
</script>

<template>
  <div>
    <button
      @click="setActive"
      :class="{
        'toggle-button': true,
        'is-active': props.isActive,
      }"
      type="button"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toggle-button {
  padding: 3px 8px 3px 8px;
  border: 1px solid var(--color-blue);
  border-radius: var(--radius-md);
  background: var(--color-white);
  color: var(--color-blue);
  outline: none;
  cursor: pointer;

  transition:
    background,
    color ease 1s;

  &.is-active {
    background: var(--color-blue);
    color: var(--color-white);
  }
}
</style>
