<script lang="ts" setup>
import { EntranceSelectionUI } from "./"

const { isMobile } = useDevice()

const imgRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isSelectors = ref<boolean>(false)

const emit = defineEmits<{
  (e: "imgLoaded"): void
}>()

const offsets = ref({
  scale: 1,
  offsetX: 0,
  offsetY: 0,
  renderedW: 0,
  renderedH: 0,
})

const update = () => {
  if (!imgRef.value || !containerRef.value) return

  const img = imgRef.value
  const container = containerRef.value

  const cw = container.clientWidth
  const ch = container.clientHeight

  const iw = img.naturalWidth
  const ih = img.naturalHeight

  const scale = Math.max(cw / iw, ch / ih)

  const renderedW = iw * scale
  const renderedH = ih * scale

  const offsetX = (renderedW - cw) * 0.58
  const offsetY = (renderedH - ch) / 2

  offsets.value = { scale, offsetX, offsetY, renderedW, renderedH }
}
onMounted(() => {
  if (imgRef.value?.complete) {
    initSelectors()
  }
  update()
  window.addEventListener("resize", update)
})
onUnmounted(() => {
  window.removeEventListener("resize", update)
})
function getStyle(x: number, y: number) {
  const { renderedW, renderedH, offsetX, offsetY } = offsets.value

  const xPx = (x / 100) * renderedW - offsetX
  const yPx = (y / 100) * renderedH - offsetY

  return {
    left: xPx + "px",
    top: yPx + "px",
    //transform: "translate(-50%, -50%)",
  }
}
function getSize(x1: number, y1: number, x2: number, y2: number) {
  const { renderedW, renderedH, offsetX, offsetY } = offsets.value

  const x1Px = (x1 / 100) * renderedW - offsetX
  const y1Px = (y1 / 100) * renderedH - offsetY
  const x2Px = (x2 / 100) * renderedW - offsetX
  const y2Px = (y2 / 100) * renderedH - offsetY

  return {
    width: x2Px - x1Px + "px",
    height: y2Px - y1Px + "px",
    //transform: "translate(-50%, -50%)",
  }
}
const initSelectors = () => {
  update()

  window.setTimeout(() => {
    isSelectors.value = true
  }, 500)
  emit("imgLoaded")
}
</script>

<template>
  <div ref="containerRef" class="bg-container">
    <img
      ref="imgRef"
      src="/images/HeroBG.webp"
      @load="initSelectors"
      alt="Изображение здания"
    />
    <template v-if="isSelectors && !isMobile">
      <EntranceSelectionUI
        :position="getStyle(42.5, 16)"
        :entrance-number="1"
        :entrance-adaptive="{
          transform: 'skew(-3deg)',
          left: '14px',
          ...getSize(42.5, 16, 47, 80),
        }"
      />
      <EntranceSelectionUI
        :position="getStyle(53, 14)"
        :entrance-number="2"
        :entrance-adaptive="{
          transform: 'skew(-2deg)',
          ...getSize(53, 14, 58, 80),
        }"
      />
      <EntranceSelectionUI
        :position="getStyle(65, 8)"
        :entrance-number="3"
        :entrance-adaptive="{
          transform: 'skew(1deg)',
          left: '7px',
          ...getSize(65, 8, 70, 80),
        }"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.bg-container {
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;
  }
}
</style>
