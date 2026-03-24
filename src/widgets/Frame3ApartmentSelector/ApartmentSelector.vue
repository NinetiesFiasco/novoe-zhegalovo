<script lang="ts" setup>
import { ApartmentInEntrance, ApartmentView } from "~/features"
import { useSectionsStore } from "~/entities"
import LevelOfFinish from "~/features/LevelOfFinish/LevelOfFinish.vue"

const sectionsStore = useSectionsStore()
sectionsStore.loadSections()
</script>

<template>
  <div class="apartments">
    <div class="apartment-selector">
      <p class="head-p">доступные</p>
      <h2>планировки квартир</h2>

      <div class="sections">
        <div v-for="section of sectionsStore.availableSections" :key="section">
          <template v-if="section !== 'section3'">
            <ApartmentInEntrance :section="section" />
          </template>
        </div>
      </div>

      <LevelOfFinish />
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
    margin-right: 200px;

    & .head-p {
      color: var(--color-blue);
      font-size: 43px;
      line-height: 100%;
    }

    & > h2 {
      font-size: 43px;
      white-space: nowrap;
      line-height: 100%;
    }

    & .sections {
      display: flex;
      margin: 25px 0 50px 0;

      & > div {
        margin: 0 15px;
      }
    }
  }

  .apartment-view {
    flex: 1;
  }
}
</style>
