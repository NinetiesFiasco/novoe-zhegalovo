<script lang="ts" setup>
import CompanyInfo from "./ui/CompanyInfo.vue"
import PageFooter from "./ui/PageFooter.vue"
</script>

<template>
  <div class="about-company">
    <div class="left-info-picture" />
    <CompanyInfo />
    <PageFooter />
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

    background-image: url("/images/AboutCompany.png");
    height: 370px;
    border-radius: var(--radius-md);
    grid-area: picture;
    margin: 0 40px 0 20px;
  }
}
</style>
