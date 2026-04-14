<script lang="ts" setup>
import { GenPlanMarks } from "./"

const imgRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isSelectors = ref<boolean>(false)

const { isMobile } = useDevice()

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
const initSelectors = () => {
  update()
  isSelectors.value = true
  emit("imgLoaded")
}
</script>

<template>
  <div ref="containerRef" class="background-with-marks">
    <div class="portrait-notification">
      Удобнее смотреть в горизонтальном режиме
    </div>
    <img
      ref="imgRef"
      :class="{ 'mobile-img': isMobile }"
      @load="initSelectors"
      src="/images/GenPlan.webp"
      alt="Изображение здания"
    />
    <template v-if="!isMobile">
      <GenPlanMarks
        :position="getStyle(40, 37)"
        text="Школа №16 на 1200 мест 50 метров"
        arrow="bottom"
      />
      <GenPlanMarks
        :position="getStyle(9, 31)"
        text="Детский сад №30 Ладушки 300 метров"
        arrow="bottom"
      />
      <GenPlanMarks
        :position="getStyle(57, 90)"
        text="Детский сад №20 Щелкунчик 200 метров"
        arrow="bottom"
      />
      <GenPlanMarks :position="getStyle(80, 60)" text="Магазины" arrow="left" />
      <GenPlanMarks :position="getStyle(3, 90)" text="Магазины" arrow="left" />
      <GenPlanMarks
        :position="getStyle(53, 55)"
        text="Подземный паркинг"
        arrow="right"
      />
      <GenPlanMarks
        :position="getStyle(77, 23)"
        text="Выбрать квартиру"
        arrow="bottom"
      />
      <GenPlanMarks
        :position="getStyle(2, 50)"
        text="Автобусная остановка"
        arrow="left"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.background-with-marks {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;

  & .portrait-notification {
    display: none;
  }

  @media screen and (orientation: portrait) {
    & .portrait-notification {
      display: block;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;
  }
  & > .mobile-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 58%;
  }
}
</style>
