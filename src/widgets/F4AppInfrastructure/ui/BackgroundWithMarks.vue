<script lang="ts" setup>
import { GenPlanMark } from "./"

const { isMobile } = useDevice()

const emit = defineEmits<{
  (e: "imgLoaded"): void
}>()

const emitLoaded = () => {
  emit("imgLoaded")
}

const { imgRef, containerRef, getPositionOffset, initSelectors } =
  useImageOffsets(emitLoaded)
</script>

<template>
  <div ref="containerRef" class="background-with-marks">
    <img
      ref="imgRef"
      :class="{ 'mobile-img': isMobile }"
      @load="initSelectors"
      src="/images/GenPlan.webp"
      alt="Изображение здания"
    />
    <template v-if="!isMobile">
      <GenPlanMark
        :position="getPositionOffset(40, 37)"
        text="Школа №16 на 1200 мест 50 метров"
        arrow="bottom"
      />
      <GenPlanMark
        :position="getPositionOffset(9, 31)"
        text="Детский сад №30 Ладушки 300 метров"
        arrow="bottom"
      />
      <GenPlanMark
        :position="getPositionOffset(57, 85)"
        text="Детский сад №20 Щелкунчик 200 метров"
        arrow="bottom"
      />
      <GenPlanMark
        :position="getPositionOffset(80, 60)"
        text="Магазины"
        arrow="left"
      />
      <GenPlanMark
        :position="getPositionOffset(3, 85)"
        text="Магазины"
        arrow="left"
      />
      <GenPlanMark
        :position="getPositionOffset(53, 55)"
        text="Подземный паркинг"
        arrow="right"
      />
      <!-- <GenPlanMark
        :position="getPositionOffset(77, 23)"
        text="Выбрать квартиру"
        arrow="bottom"
      /> -->
      <GenPlanMark
        :position="getPositionOffset(2, 50)"
        text="Автобусная остановка"
        arrow="left"
      />
      <GenPlanMark
        :position="getPositionOffset(72, 12)"
        text="Озеро"
        arrow="bottom"
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
