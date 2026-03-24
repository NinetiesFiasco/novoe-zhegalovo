<script lang="ts" setup>
// TODO: Уменьшить размер HeroBG и сделать preload
</script>

<template>
  <div class="hero-block">
    <slot name="main-menu" />
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  @include bg-picture;

  background-image: url("/images/HeroBG.webp");
  width: inherit;
  height: inherit;
  position: relative;
}
</style>
