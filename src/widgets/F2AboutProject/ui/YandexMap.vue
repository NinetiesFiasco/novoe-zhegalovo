<script lang="ts" setup>
import { YandexMapRegion } from "~/features"
import { CloseButton } from "~/shared/ui"
const { isMobile } = useDevice()

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <button class="button-map-open" @click="toggle">Расположение</button>

  <Teleport to="body">
    <div v-if="isOpen" class="overlay">
      <div class="overlay__content">
        <CloseButton @click="toggle" :top="-30" :right="isMobile ? 10 : 180" />
        <YandexMapRegion />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 1);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay__content {
  width: 90%;
  height: 80%;
  position: relative;
}
</style>
