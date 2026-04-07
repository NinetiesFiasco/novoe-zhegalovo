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
function getStyle(x: number) {
  //const { renderedW, renderedH, offsetX, offsetY } = offsets.value
  const { renderedW, offsetX } = offsets.value

  const xPx = (x / 100) * renderedW - offsetX
  //const yPx = (y / 100) * renderedH - offsetY

  return {
    left: xPx + "px",
    //top: yPx + "px",
    //transform: "translate(-50%, -50%)",
  }
}
const initSelectors = () => {
  update()
  isSelectors.value = true
  emit("imgLoaded")
}
</script>

<template>
  <div ref="containerRef" class="bg-container">
    <img
      ref="imgRef"
      src="/images/BuildingBack.webp"
      @load="initSelectors"
      alt="Изображение здания"
    />
    <template v-if="isSelectors && !isMobile">
      <EntranceSelectionUI
        :style="getStyle(61)"
        :entrance-number="1"
        :top="120"
        :entrance-adaptive="{
          left: '26px',
          width: '47px',
          height: '427px',
        }"
      />
      <EntranceSelectionUI
        :style="getStyle(53)"
        :entrance-number="2"
        :top="95"
        :entrance-adaptive="{
          transform: 'skew(0deg)',
          height: '475px',
          width: '45px',
          left: '19px',
        }"
      />
      <EntranceSelectionUI
        :style="getStyle(44)"
        :entrance-number="3"
        :top="75"
        :entrance-adaptive="{
          height: '500px',
          left: '29px',
          width: '47px',
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
