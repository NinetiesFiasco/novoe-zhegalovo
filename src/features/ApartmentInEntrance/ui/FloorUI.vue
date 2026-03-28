<script lang="ts" setup>
import type { FlatDTO, SectionNames } from "~/shared/api"
import { useSectionsStore } from "~/entities"
import FlatUI from "./FlatUI.vue"

const sectionsStore = useSectionsStore()

type Props = {
  floor: number
  flats: Array<FlatDTO> | undefined
  section: SectionNames
}

const props = defineProps<Props>()

const flats: Array<FlatDTO | undefined> = []

for (let i = 0; i < 4; i++) {
  flats.push(
    sectionsStore.sections[props.section][Number(props.floor)]?.find(
      (f) => f.position === i + 1,
    ),
  )
}
</script>

<template>
  <div class="floor-number">{{ floor }}</div>
  <template v-for="(flat, index) of flats" :key="index">
    <FlatUI :flat="flat" :floor="floor" :section="section" />
  </template>
</template>

<style lang="scss" scoped>
.floor-number {
  width: 15px;
  margin: 5px;
}

.flat {
  display: flex;
  cursor: pointer;
}
</style>
