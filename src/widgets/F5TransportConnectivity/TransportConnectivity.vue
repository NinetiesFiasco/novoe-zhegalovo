<script lang="ts" setup>
import { BackgroundWithMarks } from "./ui"
</script>
<template>
  <div class="map-container">
    <h2>Транспортная доступность</h2>
    <BackgroundWithMarks />
  </div>
</template>
<style lang="scss" scoped>
.map-container {
  height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: auto;

  & > h2 {
    margin: 40px 0;
  }
}
</style>
