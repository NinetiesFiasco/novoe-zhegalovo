<script lang="ts" setup>
type Props = {
  padding?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <section
    ref="frame"
    :class="{
      'app-section': true,
      'section-padding': props.padding,
    }"
  >
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.app-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 600px;
  height: clamp(600px, 100dvh, 900px);

  display: flex;

  scroll-snap-align: start;
  overflow-y: auto;
}
.section-padding {
  padding: 0 40px;
}
</style>
