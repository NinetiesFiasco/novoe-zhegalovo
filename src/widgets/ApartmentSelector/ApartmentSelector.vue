<script lang="ts" setup>
import { ApartmentView } from "~/features"
import { useSectionsStore } from "~/entities"
import type { SectionNames } from "~/shared/api"

const sectionsStore = useSectionsStore()
sectionsStore.loadSections()

const sectionUI = (section: SectionNames): string => {
  const ui: Record<SectionNames, string> = {
    section1: "Подъезд 1",
    section2: "Подъезд 2",
    section3: "Подъезд 3",
  }
  return ui[section]
}
</script>

<template>
  <div class="apartments">
    <div class="apartment-selector">
      <p class="head-p">доступные</p>
      <h2>планировки квартир</h2>
      <div class="sections">
        <div v-for="section of sectionsStore.availableSections" :key="section">
          <h4>{{ sectionUI(section) }}</h4>
          <div
            class="floor"
            v-for="floor of sectionsStore.getFloors(section)"
            :key="floor"
          >
            {{ floor }}
            <div
              class="flat"
              v-for="flat of sectionsStore.sections[section][Number(floor)]"
              :key="flat.number"
              @click="sectionsStore.selectFlat(section, Number(floor), flat)"
            >
              <div
                :class="{
                  box: true,
                  finished: flat.priceMeter > 150000,
                  unfinished: flat.priceMeter < 150000,
                }"
              >
                {{ flat.rooms }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="color-description">
        <div class="box unrenovated"></div>
        - без ремонта
        <div class="box unfinished"></div>
        - черновая
        <div class="box finished"></div>
        - чистовая
      </div>
    </div>
    <div class="apartment-view">
      <ApartmentView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartments {
  display: flex;
  width: 100%;

  & .apartment-selector {
    & .sections {
      display: flex;
    }
    & .floor {
      display: flex;
    }
    & .flat {
      width: 15px;
      margin: 2px 12px;
      height: 15px;
      cursor: pointer;
    }
  }

  .color-description {
    display: flex;
  }
  .box {
    width: 23px;
    height: 23px;
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

  .apartment-view {
    flex: 1;
  }
}
</style>
