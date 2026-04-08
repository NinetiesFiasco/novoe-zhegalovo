<script lang="ts" setup>
const { isMobile } = useDevice()

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
      'desktop-specials': props.padding && !isMobile,
      'mobile-specials': props.padding && isMobile,
    }"
  >
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.app-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 75px;
  min-height: 600px;
  height: clamp(600px, 100dvh, 1200px);
  display: flex;

  scroll-snap-align: start;
  overflow-y: auto;
}
.app-section:last-child {
  margin: 0 auto;
}
.desktop-specials {
  padding: 0 40px;
}
.mobile-specials {
  padding: 5px 5px;
  height: auto;
}
</style>
