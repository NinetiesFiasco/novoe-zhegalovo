<script lang="ts" setup>
const { position, arrow } = defineProps<{
  position: any
  arrow: string
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
  <div
    :class="{
      'text-mark': true,
      'text-mark--right': arrow === 'right',
      'text-mark--bottom': arrow === 'bottom',
      'text-mark--left': arrow === 'left',
    }"
    :style="position"
    @click="goTo"
  >
    <div class="bg-transparency" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text-mark {
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: auto;
  max-width: 260px;
  text-align: center;

  transition: 0.2s;

  background: rgba(255, 255, 255, 0.2);
  color: #fff;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }

  /* ХВОСТИК */
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
  }

  /* вниз */
  &--bottom::after {
    bottom: -11px;
    left: 20px;
    transform: rotate(90deg);
  }

  /* влево */
  &--left::after {
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }

  /* вправо */
  &--right::after {
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
