<script lang="ts" setup>
import {
  CompanyInfo,
  CompanyInfoMobile,
  PageFooter,
  PageFooterMobile,
} from "./ui"
const { isMobile } = useDevice()
</script>

<template>
  <div
    :class="{
      'about-company': true,
      'about-company-mobile': isMobile,
    }"
  >
    <div v-if="!isMobile" class="left-info-picture" />
    <template v-if="isMobile">
      <CompanyInfoMobile />
      <PageFooterMobile />
    </template>
    <template v-else>
      <CompanyInfo />
      <PageFooter />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.about-company {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  margin-top: 30px;
  min-height: calc(100dvh - 30px);

  grid-template-areas:
    "picture content"
    "footer footer";

  & .left-info-picture {
    @include bg-picture;

    background-image: url("/images/AboutCompany.webp");
    height: 370px;
    border-radius: var(--radius-md);
    grid-area: picture;
    margin: 0 40px 0 20px;
  }
}

.about-company-mobile {
  display: flex;
  flex-direction: column;
  width: 100%;

  & > .left-info-picture {
    height: 250px;
    min-height: 250px;
    margin: 0;
    width: 100%;
  }
}
</style>
