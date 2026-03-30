<script lang="ts" setup>
import { PageLink, OpacityLink } from "~/shared/ui/links"
import { SectionSelector } from "~/shared/ui"
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
        <section-selector class="selector" />
      </PageLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  @include bg-picture;

  background: url("/images/GenPlan.png") 80% center / cover no-repeat;

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

  & .selector {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .selector {
    bottom: 40%;
    right: 25%;
  }
  & .mobile-link {
    position: absolute;
    bottom: 150px;
    right: 25px;
  }
}
</style>
