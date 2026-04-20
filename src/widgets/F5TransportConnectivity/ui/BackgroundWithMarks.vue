<script lang="ts" setup>
import { GenPlanMark } from "./"

const { isMobile } = useDevice()

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

const busPosition = computed(() => {
  const standard = getPositionOffset(5, 50)
  return {
    top: standard.top,
    right: standard.left,
  }
})
</script>

<template>
  <div ref="containerRef" class="background-with-marks">
    <img
      ref="imgRef"
      :class="{ 'mobile-img': isMobile }"
      @load="initSelectors"
      src="/images/transport.png"
      alt="Транспортная доступность"
    />
    <template v-if="!isMobile">
      <GenPlanMark
        :position="getPositionOffset(50, 20)"
        text="До ЖД станции Воронок 15 минут пешком, электричка следует до Ярославского вокзала 40 минут"
        arrow="top"
      />
      <GenPlanMark
        :position="busPosition"
        text="До автобусная остановки 3 минуты пешком, автобус проезжает до метро Щёлковская за 20 минут"
        arrow="bottom-right"
      />
      <!-- <GenPlanMark
        :position="getPositionOffset(40, 55)"
        text="Школа №16 на 1200 мест 50 метров"
        arrow="left"
      /> -->
      <!-- <GenPlanMark
        :position="getPositionOffset(37, 85)"
        text="Детский сад №30 Ладушки 300 метров"
        arrow="bottom"
      /> -->
      <!-- <GenPlanMark
        :position="getPositionOffset(62, 35)"
        text="Детский сад №20 Щелкунчик 200 метров"
        arrow="left"
      /> -->
    </template>
  </div>
</template>

<style lang="scss" scoped>
.background-with-marks {
  margin: auto;
  position: relative;
  user-select: none;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58%;

    border-radius: 40px;
  }
  & > .mobile-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 58%;
  }
}
</style>
