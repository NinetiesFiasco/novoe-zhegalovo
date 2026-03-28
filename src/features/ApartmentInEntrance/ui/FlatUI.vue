<script lang="ts" setup>
import type { FlatDTO, SectionNames } from "~/shared/api"
import { useSectionsStore } from "~/entities"

const sectionsStore = useSectionsStore()

type Props = {
  flat: FlatDTO | undefined
  floor: number
  section: SectionNames
}

const props = defineProps<Props>()
</script>

<template>
  <div
    v-if="flat"
    @click="sectionsStore.selectFlat(section, Number(floor), flat)"
  >
    <div
      :class="{
        box: true,
        finished: flat.priceMeter > 150000,
        unfinished: flat.priceMeter < 150000,
        selected: flat.number === sectionsStore.currentFlat?.number,
      }"
    >
      {{ flat.rooms }}
    </div>
  </div>
  <div v-else class="empty"></div>
</template>

<style lang="scss" scoped>
.empty {
  width: 23px;
  height: 23px;
  margin: 5px;
}

.box {
  width: 23px;
  height: 23px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
}
.box:hover {
  outline: 1px solid var(--color-blue);
}
.box::after {
  content: "";
  position: absolute;
  inset: -3px; /* растянуть на весь элемент */
  border: 3px solid var(--color-blue);
  border-radius: 10px;
  pointer-events: none; /* чтобы не мешал кликам */
  opacity: 0;
  transition: opacity 0.3s ease;
}
.selected::after {
  opacity: 1;
}

.unrenovated {
  background: var(--color-unrenovated);
}
.unfinished {
  background: var(--color-unfinished);
}
.finished {
  background: var(--color-fully-finished);
}
</style>
