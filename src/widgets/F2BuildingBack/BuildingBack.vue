<script lang="ts" setup>
import { PageLink, OpacityLink } from "~/shared/ui"
import { EntranceSelector } from "~/shared/ui"
import { useDevice } from "~/shared/utils"
const { isMobile } = useDevice()
</script>

<template>
  <div class="building-back">
    <div class="background"></div>
    <h2>Цены от застройщика!</h2>

    <template v-if="isMobile">
      <OpacityLink class="mobile-link" link="choose-flat">
        Выбрать недвижимость
      </OpacityLink>
    </template>
    <template v-else>
      <PageLink link="choose-flat">
        <entrance-selector class="entrance3" :entrance="3" />
      </PageLink>
      <PageLink link="choose-flat">
        <entrance-selector class="entrance2" :entrance="2" />
      </PageLink>
      <PageLink link="choose-flat">
        <entrance-selector class="entrance1" :entrance="1" />
      </PageLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  @include bg-picture;

  background-image: url("/images/BuildingBack.webp");
  width: inherit;
  height: inherit;
  position: relative;

  & > .background {
    background: white;
    width: 500px;
    height: 60px;
    position: absolute;
    right: 30px;
    top: 20px;
    opacity: 0.2;
    z-index: 90;
    border-radius: var(--radius-md);
  }

  & > h2 {
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    font-size: 40px;
    z-index: 100;
    user-select: none;
  }

  & .entrance1,
  & .entrance2,
  & .entrance3 {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
    width: clamp(150px, 16vw, 200px);
  }

  & .entrance1 {
    bottom: 21%;
    left: 64%;
  }

  & .entrance2 {
    bottom: 18%;
    left: 53%;
  }

  & .entrance3 {
    bottom: 17%;
    left: 43%;
  }
  & .mobile-link {
    position: absolute;
    bottom: 150px;
    right: 25px;
  }
}
</style>
