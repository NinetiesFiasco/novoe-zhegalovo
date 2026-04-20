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
</script>

<template>
  <div ref="containerRef" class="background-with-marks">
    <img
      ref="imgRef"
      :class="{ 'mobile-img': isMobile }"
      @load="initSelectors"
      src="/images/transport.webp"
      alt="Транспортная доступность"
    />
    <template v-if="!isMobile">
      <GenPlanMark
        :position="getPositionOffset(30, 15)"
        text="Пешком до ЖД станции Воронок 15 минут"
        arrow="top"
      />
      <GenPlanMark
        :position="getPositionOffset(40, 55)"
        text="Школа №16 на 1200 мест 50 метров"
        arrow="left"
      />
      <GenPlanMark
        :position="getPositionOffset(37, 85)"
        text="Детский сад №30 Ладушки 300 метров"
        arrow="bottom"
      />
      <GenPlanMark
        :position="getPositionOffset(62, 35)"
        text="Детский сад №20 Щелкунчик 200 метров"
        arrow="left"
      />
      <GenPlanMark
        :position="getPositionOffset(58, 90)"
        text="Автобусная остановка, 3 минуты пешком"
        arrow="bottom"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.background-with-marks {
  width: 80%;
  height: 80%;
  margin: auto;
  position: relative;
  user-select: none;

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
