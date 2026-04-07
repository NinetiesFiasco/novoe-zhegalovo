<script lang="ts" setup>
import { BackgroundWithSelection } from "./ui"
import { GoToFlats } from "~/features"
const { isMobile } = useDevice()
</script>

<template>
  <div class="building-back">
    <BackgroundWithSelection />
    <template v-if="isMobile">
      <GoToFlats />
    </template>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  width: inherit;
  height: inherit;
  position: relative;
}
</style>
