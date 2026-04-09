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
        :position="getStyle(35, 35)"
        text="Школа №16 на 1200 мест 50 метров"
      />
      <GenPlanMarks
        :position="getStyle(10, 35)"
        text="Детский сад №30 Ладушки 300 метров"
      />
      <GenPlanMarks
        :position="getStyle(55, 90)"
        text="Детский сад №20 Щелкунчик 200 метров"
      />
      <GenPlanMarks :position="getStyle(75, 50)" text="Магазины" />
      <GenPlanMarks :position="getStyle(5, 80)" text="Магазины" />
      <GenPlanMarks :position="getStyle(55, 50)" text="Подземный паркинг" />
      <GenPlanMarks :position="getStyle(75, 25)" text="Выбрать квартиру" />
      <GenPlanMarks :position="getStyle(5, 50)" text="Автобусная остановка" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.background-with-marks {
  width: 100%;
  height: 100%;
  position: relative;

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
