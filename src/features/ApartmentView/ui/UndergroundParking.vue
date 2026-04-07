<script lang="ts" setup>
import { PictureViewer, PrimaryButton } from "~/shared/ui"

const isPictures = ref<boolean>(false)

const pictures = Array.from({ length: 3 }, (_, i) => `${i + 1}.webp`)
</script>

<template>
  <div>
    <PrimaryButton @click="isPictures = true">Подземная парковка</PrimaryButton>
    <PictureViewer
      v-if="isPictures"
      @close="isPictures = false"
      title="Подземная парковка"
      :url="`/images/parking/`"
      :pictures="pictures"
    />
  </div>
</template>

<style lang="scss" scoped></style>
