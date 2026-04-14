<script lang="ts" setup>
const props = defineProps<{
  src: string
}>()
</script>

<template>
  <div class="swiper-element">
    <div class="image">
      <img :src="src" />
    </div>
    <h4>
      <slot name="header" />
    </h4>
    <div class="text">
      <slot name="text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-element {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
  & .image {
    user-select: none;
    & > img {
      background: url("/images/voronok.webp") center center / cover no-repeat;
      height: 300px;
      width: 100%;
      border-radius: 15px;
    }
  }
  & > h4 {
    user-select: none;
    color: var(--color-blue);
  }
  & > .text {
    font-size: 14px;
    color: #666;
  }
}
</style>
