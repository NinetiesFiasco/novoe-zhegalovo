<script lang="ts" setup>
const props = defineProps<{
  top: number
  right: number
}>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const close = () => {
  emit("close")
}

const style = computed(() => {
  return {
    top: `${props.top}px`,
    right: `${props.right}px`,
  }
})
</script>

<template>
  <div class="close" @click="close" :style="style">X</div>
</template>

<style lang="scss" scoped>
.close {
  position: absolute;
  top: 16px;
  right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  font-size: 20px;
  font-weight: bold;
  line-height: 1;

  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  cursor: pointer;
  user-select: none;
  z-index: 11000;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.75);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
