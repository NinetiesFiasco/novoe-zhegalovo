<script lang="ts" setup>
import { BackgroundWithMarks } from "./ui"
import { GoodPrices } from "~/features"
</script>

<template>
  <div class="gen-plan">
    <BackgroundWithMarks />
    <GoodPrices />
  </div>
</template>

<style scoped lang="scss">
.gen-plan {
  width: inherit;
  height: inherit;
  position: relative;

  & .selector {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .selector {
    bottom: 40%;
    right: 23%;
  }
}
</style>
