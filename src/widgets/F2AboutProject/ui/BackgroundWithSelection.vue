<script lang="ts" setup></script>

<template>
  <div ref="containerRef" class="bg-container">
    <img ref="imgRef" src="/images/HeroBG.webp" alt="Изображение здания" />
  </div>
</template>

<style lang="scss" scoped>
.bg-container {
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;
  }
}
</style>
