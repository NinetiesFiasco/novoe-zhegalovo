<script lang="ts" setup>
import { MainOffer, ChooseFlat } from "./ui"
</script>

<template>
  <div id="hero-block" class="hero-block spy-section">
    <div class="hero-section">
      <div class="hero-interaction">
        <div class="offer-container">
          <MainOffer />
        </div>
        <div class="choose-flat">
          <ChooseFlat />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-block {
  width: inherit;
  height: 100vh;
  height: 100dvh;
  position: relative;
  background: url("/images/BuildingBack.webp") center center / cover no-repeat;

  & > .hero-section {
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    position: relative;

    & > .hero-interaction {
      position: absolute;
      width: 100%;
      bottom: 100px;
      display: flex;
      align-items: end;
      justify-content: space-between;

      & > .choose-flat {
        margin-right: 50px;
      }
      & > .offer-container {
        width: 400px;
        margin-left: 25px;
      }
    }

    @media screen and (max-width: 900px) {
      & > .hero-interaction {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > .choose-flat {
          margin: 0;
          margin-top: 50px;
        }
        & > .offer-container {
          margin: 0;
        }
      }
    }
    @media screen and (max-width: 450px) {
      & > .hero-interaction {
        & > .offer-container {
          max-width: 300px;
        }
      }
    }
  }
}
</style>
