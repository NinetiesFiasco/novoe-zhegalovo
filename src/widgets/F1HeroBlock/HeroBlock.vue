<script lang="ts" setup>
import { PageLink } from "~/shared/ui/links"
import { EntranceSelector } from "~/shared/ui"
import { MainMenu } from "~/features"

const isLoaded = ref(false)
const isUI = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    isLoaded.value = true
    window.setTimeout(() => {
      isUI.value = true
    }, 500)
  }, 1000)
})
</script>

<template>
  <div class="hero-block">
    <div
      :class="{
        'logo-image': true,
        'logo-image-loaded': isLoaded,
      }"
    />
    <template v-if="isUI">
      <PageLink link="choose-flat">
        <entrance-selector class="entrance1" :entrance="1" />
      </PageLink>
      <PageLink link="choose-flat">
        <entrance-selector class="entrance2" :entrance="2" />
      </PageLink>
      <PageLink link="choose-flat">
        <entrance-selector class="entrance3" :entrance="3" />
      </PageLink>

      <MainMenu />

      <div class="contact-phone font-bold">
        <div>+7 (ХХХ) ХХ-ХХ-ХХ</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  @include bg-picture;

  background-image: url("/images/HeroBG.jpg");
  width: inherit;
  height: inherit;
  position: relative;

  & .logo-image {
    @include bg-picture;
    background-image: url("/images/Logo.svg");
    position: absolute;
    top: calc(50% - 112px);
    left: calc(50% - 121px);
    height: 225px;
    width: 242px;
    transform: scale(2);

    transition:
      left 1s ease-out,
      transform 1s ease-out;
  }
  & .logo-image-loaded {
    @include bg-picture;
    background-image: url("/images/Logo.svg");
    left: 20px;
    transform: scale(1);
  }

  & .entrance1,
  & .entrance2,
  & .entrance3 {
    position: absolute;
    cursor: pointer;
    caret-color: transparent;
  }

  & .entrance1 {
    bottom: 17%;
    left: 44%;
  }

  & .entrance2 {
    bottom: 17%;
    left: 55%;
  }

  & .entrance3 {
    bottom: 17%;
    left: 67%;
  }

  & .contact-phone {
    position: absolute;
    bottom: 30px;
    right: 25px;
    font-size: 30px;
    color: var(--color-white);
  }
}
</style>
