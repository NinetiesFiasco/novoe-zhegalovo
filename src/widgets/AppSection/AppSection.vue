<script lang="ts" setup></script>

<template>
  <section class="app-section">
    <slot />
  </section>
</template>

<style scoped>
.app-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  min-height: 100dvh;
  display: flex;

  scroll-snap-align: start;
}
</style>
