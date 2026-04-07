<script lang="ts" setup>
const { isMobile } = useDevice()
const { isLoaded } = defineProps<{ isLoaded: boolean }>()
</script>

<template>
  <div
    :class="{
      'logo-image': true,
      'logo-image-unloaded': !isLoaded,
      'logo-image-loaded-desktop': isLoaded && !isMobile,
      'logo-image-loaded-mobile': isLoaded && isMobile,
    }"
  />
</template>

<style lang="scss" scoped>
.logo-image {
  @include bg-picture;
  background-image: url("/images/Logo.svg");
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 53px;

  transition:
    top 1s ease-out,
    left 1s ease-out,
    transform 1s ease-out;
}
.logo-image-unloaded {
  top: calc(50% - 50px);
  left: calc(50% - 60px);
  transform: scale(6);
}
@media (max-width: 768px) {
  .logo-image-unloaded {
    top: calc(50% - 25px);
    left: calc(50% - 30px);
    transform: scale(3);
  }
}
.logo-image-unloaded-mobile {
  top: calc(50% - 50px);
  left: calc(50% - 20px);
  transform: scale(1);
}
.logo-image-loaded-desktop {
  left: 120px;
  top: calc(50% - 60px);
  transform: scale(4);
}
.logo-image-loaded-mobile {
  left: 20px;
  top: 20px;
  width: 100px;
  height: 100px;
  transform: scale(1);
}
</style>
