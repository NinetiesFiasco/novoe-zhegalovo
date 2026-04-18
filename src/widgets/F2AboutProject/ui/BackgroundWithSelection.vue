<script lang="ts" setup>
import EntranceSelectionUI from "./EntranceSelectionUI.vue"

const emit = defineEmits<{
  (e: "imgLoaded"): void
}>()

const emitLoaded = () => {
  emit("imgLoaded")
}

const {
  imgRef,
  containerRef,
  getPositionOffset,
  getSubDimensions,
  initSelectors,
} = useImageOffsets(emitLoaded)
</script>

<template>
  <div ref="containerRef" class="bg-container">
    <img
      ref="imgRef"
      src="/images/HeroBG.webp"
      alt="Изображение здания"
      @load="initSelectors"
    />
    <EntranceSelectionUI
      :position="getPositionOffset(43.9, 16.7)"
      :entrance-number="1"
      :entrance-adaptive="{
        transform: 'skew(-3deg)',
        ...getSubDimensions(42.7, 16, 47, 80),
      }"
    />
    <EntranceSelectionUI
      :position="getPositionOffset(53.5, 14)"
      :entrance-number="2"
      :entrance-adaptive="{
        transform: 'skew(-2deg)',
        ...getSubDimensions(53, 14, 58, 80),
      }"
    />
    <EntranceSelectionUI
      :position="getPositionOffset(65, 8)"
      :entrance-number="3"
      :entrance-adaptive="{
        transform: 'skew(1deg)',
        left: '7px',
        ...getSubDimensions(65, 8, 70.5, 80),
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.bg-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;
  }
}
</style>
