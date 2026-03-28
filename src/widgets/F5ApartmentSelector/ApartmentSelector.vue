<script lang="ts" setup>
import { ApartmentInEntrance, ApartmentView } from "~/features"
import { useSectionsStore } from "~/entities"
import { getSections, type SectionsDTO } from "~/shared/api"
import { getBaseURL } from "~/shared/utils"
import LevelOfFinish from "~/features/LevelOfFinish/LevelOfFinish.vue"

const sectionsStore = useSectionsStore()

const baseURL = getBaseURL()
const { data } = await useAsyncData("sections", () => getSections(baseURL))
if (data.value) {
  sectionsStore.setSections(data.value)
}
onMounted(async () => {
  const data: SectionsDTO = await getSections(baseURL)
  sectionsStore.setSections(data)
})
</script>

<template>
  <div class="apartments">
    <div class="apartment-selector">
      <p class="head-p">доступные</p>
      <h2>планировки квартир</h2>

      <div class="sections">
        <div v-for="section of sectionsStore.availableSections" :key="section">
          <ApartmentInEntrance :section="section" />
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
