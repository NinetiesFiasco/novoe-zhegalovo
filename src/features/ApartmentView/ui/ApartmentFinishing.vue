<script lang="ts" setup>
import { PictureViewer, PrimaryButton } from "~/shared/ui"
import { useSectionsStore } from "~/entities"
import { getBaseURL } from "~/shared/utils"

const baseURL = getBaseURL()

const sectionsStore = useSectionsStore()
const { isFinished } = sectionsStore

const isPictures = ref<boolean>(false)

const finishedPictures = Array.from({ length: 13 }, (_, i) => `${i + 1}.webp`)
const preFinishedPictures = Array.from({ length: 9 }, (_, i) => `${i + 1}.webp`)
</script>

<template>
  <div>
    <PrimaryButton @click="isPictures = true">{{
      isFinished ? "Пример чистовой отделки" : "Пример черновой отделки"
    }}</PrimaryButton>
    <PictureViewer
      v-if="isPictures"
      @close="isPictures = false"
      :title="
        isFinished ? 'Пример чистовой отделки' : 'Пример черновой отделки'
      "
      :url="
        isFinished
          ? `${baseURL}images/interior/finished/`
          : `${baseURL}images/interior/prefinished/`
      "
      :pictures="isFinished ? finishedPictures : preFinishedPictures"
    />
  </div>
</template>

<style lang="scss" scoped></style>
