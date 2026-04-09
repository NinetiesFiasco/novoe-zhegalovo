<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { BackgroundWithMarks } from "./ui"
import { GoToFlats, GoodPrices } from "~/features"
import { SectionSelector } from "~/shared/ui"
const { isMobile } = useDevice()
</script>

<template>
  <div class="gen-plan">
    <BackgroundWithMarks />
    <GoodPrices />
    <template v-if="!isMobile">
      <PageLink link="choose-flat">
        <section-selector class="selector" />
      </PageLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.gen-plan {
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
