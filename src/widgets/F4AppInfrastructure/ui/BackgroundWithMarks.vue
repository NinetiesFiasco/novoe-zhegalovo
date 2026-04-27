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
      <GenPlanMark :position="getPositionOffset(40, 37)" arrow="bottom">
        Школа №16 на 1200 мест 50 метров
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(78, 20)" arrow="bottom">
        <span class="compass"
          >Окна во двор выходят на восток<br />
          снаружи дома — на запад</span
        >
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(9, 31)" arrow="bottom">
        Детский сад №30 Ладушки 300 метров
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(57, 85)" arrow="bottom">
        Детский сад №20 Щелкунчик 200 метров
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(80, 60)" arrow="left">
        Магазины
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(3, 85)" arrow="left">
        Магазины
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(53, 55)" arrow="right">
        Подземный паркинг
      </GenPlanMark>
      <!-- <GenPlanMark
        :position="getPositionOffset(77, 23)"
        text="Выбрать квартиру"
        arrow="bottom"
      /> -->
      <GenPlanMark :position="getPositionOffset(2, 50)" arrow="left">
        Автобусная остановка
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(72, 12)" arrow="bottom">
        Озеро
      </GenPlanMark>
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
  & .compass {
    font-size: 13px;
  }
}
</style>
