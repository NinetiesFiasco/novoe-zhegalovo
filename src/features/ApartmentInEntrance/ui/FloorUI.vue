<script lang="ts" setup>
import type { FlatDTO, SectionNames } from "~/shared/api"
import { useSectionsStore } from "~/entities"
import FlatUI from "./FlatUI.vue"

const sectionsStore = useSectionsStore()
sectionsStore.loadSections()

type Props = {
  floor: number
  flats: Array<FlatDTO> | undefined
  section: SectionNames
}

const props = defineProps<Props>()

const flatOne = sectionsStore.sections[props.section][
  Number(props.floor)
]?.find((f) => f.position === 1)
const flatTwo = sectionsStore.sections[props.section][
  Number(props.floor)
]?.find((f) => f.position === 2)
</script>

<template>
  <div class="floor-number">{{ floor }}</div>
  <FlatUI :flat="flatOne" :floor="floor" :section="section" />
  <FlatUI :flat="flatTwo" :floor="floor" :section="section" />
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
