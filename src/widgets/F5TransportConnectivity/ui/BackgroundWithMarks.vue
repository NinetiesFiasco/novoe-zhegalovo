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
  const standard = getPositionOffset(5, 42)
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
      src="/images/transport.webp"
      alt="Транспортная доступность"
    />
    <template v-if="!isMobile">
      <GenPlanMark :position="getPositionOffset(43, 25)">
        <img
          src="/icons/pedestrian.svg"
          class="info-icon"
          width="35"
          height="35"
        />
        <p class="text-mark">
          До ЖД станции Воронок<br />
          <b>15 минут</b> пешком
        </p>
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(13, 15)">
        <img src="/icons/train.svg" class="info-icon" width="50" height="50" />
        <p class="text-mark">
          До Ярославского вокзала<br />
          <b>40 минут</b> на электричке
        </p>
      </GenPlanMark>
      <GenPlanMark :position="getPositionOffset(53, 63)">
        <img
          src="/icons/pedestrian.svg"
          class="info-icon"
          width="35"
          height="35"
        />
        <p class="text-mark">
          До автобусной остановки<br />
          <b>3 минуты</b> пешком
        </p>
      </GenPlanMark>
      <GenPlanMark :position="busPosition">
        <img src="/icons/bus.svg" class="info-icon" width="50" height="50" />
        <p class="text-mark">
          До метро Щёлковская<br />
          <b>20 минут</b> на автобусе
        </p>
      </GenPlanMark>
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
  & .info-icon {
    float: left;
    margin: 5px;
  }
  & .text-mark {
    text-wrap: nowrap;
  }
}
</style>
