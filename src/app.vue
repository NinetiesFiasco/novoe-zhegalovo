<script lang="ts" setup>
import {
  AppSection,
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
    <AppSection>
      <MainInfo />
    </AppSection>
    <AppSection id="choose-flat">
      <ApartmentSelector />
    </AppSection>
    <AppSection>
      <DroneVideo />
    </AppSection>
    <AppSection>
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
