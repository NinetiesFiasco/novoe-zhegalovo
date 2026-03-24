<script lang="ts" setup>
import type { SectionNames } from "~/shared/api"
import { useSectionsStore } from "~/entities"
import FloorUI from "./ui/FloorUI.vue"

const sectionsStore = useSectionsStore()
sectionsStore.loadSections()

type Props = {
  section: SectionNames
}

const props = defineProps<Props>()

const { section } = props

const sectionUI = (section: SectionNames): string => {
  const ui: Record<SectionNames, string> = {
    section1: "1 Подъезд",
    section2: "2 Подъезд",
    section3: "3 Подъезд",
  }
  return ui[section]
}
</script>

<template>
  <div class="apartment-in-entrance">
    <h2>{{ sectionUI(section) }}</h2>
    <div
      class="floor"
      v-for="floor of sectionsStore.getFloors(section).reverse()"
      :key="floor"
    >
      <FloorUI
        :flats="sectionsStore.sections[section][Number(floor)]"
        :floor="Number(floor)"
        :section="section"
      />
    </div>
    <div class="floor-sign">этаж</div>
  </div>
</template>

<style lang="scss" scoped>
.apartment-in-entrance {
  & > h2 {
    color: var(--color-grey-accent);
  }

  & .floor {
    display: flex;
    user-select: none;
  }

  & .floor-sign {
    writing-mode: sideways-lr;
    margin-left: -5px;
  }
}
</style>
