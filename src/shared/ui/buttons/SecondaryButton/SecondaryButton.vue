<script lang="ts" setup>
type Props = {
  text: string
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <button class="secondary-button" type="button">{{ props.text }}</button>
  </div>
</template>

<style scoped>
.secondary-button {
  padding: 3px 8px 3px 8px;
  border: 1px solid var(--color-blue);
  border-radius: var(--radius-md);
  background: var(--color-white);
  color: var(--color-blue);
  outline: none;
  cursor: pointer;
}
</style>
