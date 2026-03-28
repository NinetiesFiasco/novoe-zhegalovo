<script lang="ts" setup>
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { AppSection } from "~/shared/ui"
import {
  HeroBlock,
  BuildingBack,
  MainInfo,
  ApartmentSelector,
  DroneVideo,
  AboutCompany,
  GenPlan,
} from "~/widgets"
</script>

<template>
  <main class="app-main">
    <AppSection>
      <HeroBlock />
    </AppSection>
    <AppSection>
      <BuildingBack />
    </AppSection>
    <AppSection>
      <GenPlan />
    </AppSection>
    <AppSection padding id="main-info">
      <MainInfo />
    </AppSection>
    <AppSection padding id="choose-flat">
      <ApartmentSelector />
    </AppSection>
    <AppSection>
      <DroneVideo />
    </AppSection>
    <AppSection id="about-company">
      <AboutCompany />
    </AppSection>
  </main>
</template>

<style>
.app-main {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  color: var(--color-grey-accent);
}
</style>
