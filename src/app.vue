<script lang="ts" setup>
import { AppSection } from "~/shared/ui"
import {
  HeroBlock,
  MainInfo,
  ApartmentSelector,
  MainMenu,
  DroneVideo,
  AboutCompany,
} from "~/widgets"
</script>

<template>
  <main class="app-main">
    <AppSection>
      <HeroBlock>
        <template #main-menu>
          <MainMenu />
        </template>
      </HeroBlock>
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
