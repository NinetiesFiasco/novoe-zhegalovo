<script lang="ts" setup>
import { MainOffer } from "./ui"
</script>

<template>
  <div class="building-back">
    <img
      ref="imgRef"
      src="/images/BuildingBack.webp"
      alt="Изображение здания"
    />
    <div class="offer-container">
      <MainOffer />
    </div>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  width: inherit;
  height: 100vh;
  height: 100dvh;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;
  }

  & > .offer-container {
    position: absolute;
    width: 200px;
    background: white;
    bottom: 200px;
    left: 200px;
  }
}
</style>
