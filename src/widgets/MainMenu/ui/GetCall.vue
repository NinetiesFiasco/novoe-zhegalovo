<script lang="ts" setup>
const emit = defineEmits<{
  (e: "toggle"): void
}>()
</script>

<template>
  <div @click="emit('toggle')" class="get-call">заказать звонок</div>
</template>

<style lang="scss" scoped>
.get-call {
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background: #555;
  }
}
</style>
