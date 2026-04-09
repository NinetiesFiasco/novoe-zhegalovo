<script lang="ts" setup>
import { AppSection } from "~/shared/ui"
import {
  HeroBlock,
  BuildingBack,
  YandexMap,
  MainInfo,
  ApartmentSelector,
  DroneVideo,
  AboutCompany,
  GenPlan,
} from "~/widgets"
const { isMobile } = useDevice()
</script>

<template>
  <main class="app-main">
    <AppSection id="hero-block">
      <HeroBlock />
    </AppSection>
    <AppSection v-if="!isMobile">
      <BuildingBack />
    </AppSection>
    <AppSection id="gen-plan">
      <GenPlan />
    </AppSection>
    <AppSection>
      <YandexMap />
    </AppSection>
    <AppSection padding full-height id="choose-flat">
      <ApartmentSelector />
    </AppSection>
    <AppSection padding id="main-info">
      <MainInfo />
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
@import "swiper/css";
@import "swiper/css/navigation";
@import "swiper/css/pagination";

.app-main {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  color: var(--color-grey-accent);
  scrollbar-width: thin;
}
</style>
