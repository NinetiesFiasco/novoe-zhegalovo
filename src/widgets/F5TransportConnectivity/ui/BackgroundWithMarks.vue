<script lang="ts" setup>
import { GenPlanMarks } from "./"

const isSelectors = ref<boolean>(false)

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
    <div class="portrait-notification">
      Удобнее смотреть в горизонтальном режиме
    </div>
    <img
      ref="imgRef"
      :class="{ 'mobile-img': isMobile }"
      @load="initSelectors"
      src="/images/transport.webp"
      alt="Транспортная доступность"
    />
    <template v-if="!isMobile">
      <GenPlanMarks
        :position="getPositionOffset(30, 15)"
        text="Пешком до ЖД станции Воронок 15 минут"
        arrow="top"
      />
      <GenPlanMarks
        :position="getPositionOffset(40, 55)"
        text="Школа №16 на 1200 мест 50 метров"
        arrow="left"
      />
      <GenPlanMarks
        :position="getPositionOffset(37, 85)"
        text="Детский сад №30 Ладушки 300 метров"
        arrow="bottom"
      />
      <GenPlanMarks
        :position="getPositionOffset(62, 35)"
        text="Детский сад №20 Щелкунчик 200 метров"
        arrow="left"
      />
      <GenPlanMarks
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
