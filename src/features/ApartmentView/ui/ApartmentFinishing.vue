<script lang="ts" setup>
import { PictureViewer, PrimaryButton } from "~/shared/ui"
import { useSectionsStore } from "~/entities"
import { GetCall } from "~/features"

const isModalCallOpened = ref<boolean>(false)

const sectionsStore = useSectionsStore()
const { isFinished } = storeToRefs(sectionsStore)

const isPictures = ref<boolean>(false)

const finishedPictures = Array.from({ length: 7 }, (_, i) => `${i + 1}.webp`)
const preFinishedPictures = Array.from({ length: 4 }, (_, i) => `${i + 1}.webp`)
</script>

<template>
  <div>
    <template v-if="isFinished">
      <PrimaryButton @click="isPictures = true">
        Пример чистовой отделки
      </PrimaryButton>

      <GetCall
        :is-open="isModalCallOpened"
        @toggle="isModalCallOpened = !isModalCallOpened"
        text="Забронировать"
        status="Забронировать квартиру"
      />
      <PictureViewer
        v-if="isPictures"
        @close="isPictures = false"
        title="Пример чистовой отделки"
        url="/images/interior/finished/"
        :pictures="finishedPictures"
      />
    </template>
    <template v-else>
      <p>
        Квартира в черновой отделке, выполнены все мокрые процессы, сделана
        стяжка и штукатурка, выполнена электро разводка
      </p>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
