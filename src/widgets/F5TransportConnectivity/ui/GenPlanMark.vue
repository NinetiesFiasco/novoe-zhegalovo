<script lang="ts" setup>
const { position } = defineProps<{
  position: any
}>()

const goTo = () => {
  if (document) {
    document.getElementById("choose-flat")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <div class="text-mark" :style="position" @click="goTo">
    <div class="bg-transparency" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text-mark {
  position: absolute;

  padding: 10px 14px;
  width: 350px;

  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;

  color: #1f2937;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }
}
</style>
