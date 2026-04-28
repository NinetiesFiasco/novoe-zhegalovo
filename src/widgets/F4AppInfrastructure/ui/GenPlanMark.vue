<script lang="ts" setup>
const { position, arrow } = defineProps<{
  position: any
  arrow: string
}>()
</script>

<template>
  <div class="text-mark" :style="position">
    <div
      :class="{
        line: true,
        'line--right': arrow === 'right',
        'line--bottom':
          arrow === 'bottom' ||
          arrow === 'bottom-right' ||
          arrow === 'bottom-middle',
        'line--left': arrow === 'left',
      }"
    ></div>
    <div
      :class="{
        text: true,
        'text--right': arrow === 'right',
        'text--bottom': arrow === 'bottom',
        'text--bottom-right': arrow === 'bottom-right',
        'text--bottom-middle': arrow === 'bottom-middle',
        'text--left': arrow === 'left',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-mark {
  position: absolute;

  width: 0px;
  height: 0px;

  &:hover {
    transform: scale(1.05);
  }

  & .line {
    position: absolute;
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);

    &--bottom {
      top: -20px;
      width: 2px;
      height: 20px;
    }

    &--left {
      right: -20px;
    }

    &--right {
      left: -20px;
    }
  }

  & .text {
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: max-content;
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

    &--bottom {
      bottom: 20px;
      left: -20px;
    }
    &--bottom-right {
      bottom: 20px;
      right: -20px;
    }
    &--bottom-middle {
      bottom: 20px;
      transform: translateX(-50%);
    }

    &--left {
      left: 20px;
      transform: translateY(-50%);
    }

    &--right {
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>
