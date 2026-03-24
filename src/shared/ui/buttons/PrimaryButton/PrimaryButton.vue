<script lang="ts" setup></script>

<template>
  <button class="primary-button" type="button">
    <slot>{{ props.text }}</slot>
  </button>
</template>

<style scoped>
.primary-button {
  padding: 3px 8px 3px 8px;
  border: 1px solid var(--color-blue);
  border-radius: var(--radius-md);
  background: var(--color-blue);
  color: var(--color-white);
  outline: none;
  cursor: pointer;
}
.primary-button:hover {
  background: var(--color-blue-opacity);
}
</style>
