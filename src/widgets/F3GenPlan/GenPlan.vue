<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { SectionSelector } from "~/shared/ui"
</script>

<template>
  <div class="building-back">
    <div class="background"></div>
    <h2>Цены от застройщика!</h2>
    <PageLink link="choose-flat">
      <section-selector class="selector" />
    </PageLink>
  </div>
</template>

<style scoped lang="scss">
.building-back {
  @include bg-picture;

  background-image: url("/images/GenPlan.png");
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
    left: 50%;
  }
}
</style>
