<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { GoToFlats, GoodPrices } from "~/features"
import { SectionSelector } from "~/shared/ui"
const { isMobile } = useDevice()
</script>

<template>
  <div class="building-back">
    <GoodPrices />
    <template v-if="isMobile">
      <GoToFlats />
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

  background: url("/images/GenPlan.webp") 80% center / cover no-repeat;

  width: inherit;
  height: inherit;
  position: relative;

  & .selector {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .selector {
    bottom: 40%;
    right: 23%;
  }
}
</style>
