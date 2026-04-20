<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits<{
  (e: "toggle"): void
}>()
</script>

<template>
  <button class="burger" @click="emit('toggle')">
    <span :class="{ open: isOpen }"></span>
    <span :class="{ open: isOpen }"></span>
    <span :class="{ open: isOpen }"></span>
  </button>
</template>

<style lang="scss" scoped>
/* Кнопка */
.burger {
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  position: relative;

  & span {
    display: block;
    height: 3px;
    background: black;
    transition: 0.3s;
  }

  /* Анимация в крестик */
  & span.open:nth-child(1) {
    transform: rotate(45deg) translateY(8px) translateX(6px);
  }
  & span.open:nth-child(2) {
    opacity: 0;
  }
  & span.open:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px) translateX(6px);
  }
}
</style>
