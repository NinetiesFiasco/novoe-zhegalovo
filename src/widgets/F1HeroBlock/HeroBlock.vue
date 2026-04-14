<script lang="ts" setup>
import { MainOffer, ChooseFlat } from "./ui"
</script>

<template>
  <div id="hero-block" class="hero-block spy-section">
    <div class="hero-section">
      <div class="offer-container">
        <MainOffer />
      </div>
      <div class="choose-flat">
        <ChooseFlat />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  width: inherit;
  height: 100vh;
  height: 100dvh;
  position: relative;
  background: url("/images/BuildingBack.webp") center center / cover no-repeat;

  & > .hero-section {
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    position: relative;

    & > .choose-flat {
      position: absolute;
      bottom: 100px;
      right: 50px;
    }
    & > .offer-container {
      position: absolute;
      width: 400px;
      bottom: 100px;
      left: 25px;
    }
  }
}
</style>
