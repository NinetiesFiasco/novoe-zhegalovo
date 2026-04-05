<script lang="ts" setup>
import { useDevice } from "~/shared/utils"

const { isMobile } = useDevice()
const { isLoaded } = defineProps<{ isLoaded: boolean }>()
</script>

<template>
  <div
    :class="{
      'logo-image': true,
      'logo-image-loaded': isLoaded && !isMobile,
      'logo-image-loaded-mobile': isLoaded && isMobile,
    }"
  />
</template>

<style lang="scss" scoped>
.logo-image {
  @include bg-picture;
  background-image: url("/images/Logo.svg");
  position: absolute;
  top: calc(50% - 112px);
  left: calc(50% - 121px);
  height: 225px;
  width: 242px;
  transform: scale(2);

  transition:
    top 1s ease-out,
    left 1s ease-out,
    transform 1s ease-out;
}
.logo-image-loaded {
  left: 20px;
  transform: scale(1);
}
.logo-image-loaded-mobile {
  left: 0px;
  top: 0px;
  transform: scale(0.5);
}
</style>
