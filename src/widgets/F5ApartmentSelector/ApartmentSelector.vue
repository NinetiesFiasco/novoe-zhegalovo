<script lang="ts" setup>
import { ApartmentInEntrance, ApartmentView, LevelOfFinish } from "~/features"
import { useSectionsStore } from "~/entities"
import { getSections, type SectionsDTO } from "~/shared/api"

const { isMobile } = useDevice()

const sectionsStore = useSectionsStore()

const { data } = await useAsyncData("sections", () => getSections())
if (data.value) {
  sectionsStore.setSections(data.value)
}
onMounted(async () => {
  const data: SectionsDTO = await getSections()
  sectionsStore.setSections(data)
})
</script>

<template>
  <div
    class="apartments"
    :style="{ flexDirection: isMobile ? 'column' : 'row' }"
  >
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
      <div id="current-flat"></div>
      <ApartmentView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartments {
  display: flex;
  width: 100%;

  & .apartment-selector {
    margin-right: clamp(10px, 5vw, 100px);

    & .head-p {
      color: var(--color-blue);
      font-size: clamp(30px, 3vw, 43px);
      line-height: 100%;
    }

    & > h2 {
      font-size: clamp(30px, 3vw, 43px);
      white-space: nowrap;
      line-height: 100%;
    }

    & .sections {
      display: flex;
      margin: 25px 0 50px 0;

      & > div {
        margin: 0 clamp(5px, 2vw, 15px);
      }
    }
  }

  .apartment-view {
    flex: 1;
  }
}
</style>
