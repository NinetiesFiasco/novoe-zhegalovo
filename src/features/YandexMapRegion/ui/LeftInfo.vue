<script lang="ts" setup>
const { isMobile } = useDevice()
</script>

<template>
  <div :class="isMobile ? 'left-info-mobile' : 'left-info'">
    <img class="pedestrian" src="/icons/pedestrian.svg" alt="Иконка пешехода" />
    <p>15 минут пешком до Ж/Д станции Воронок</p>
    <img class="train" src="/icons/train.svg" alt="Иконка поезда" />
    <p>До Ярославского вокзала можно проехать за 40 минут на электропоезде</p>
  </div>
</template>

<style lang="scss" scoped>
.left-info {
  grid-area: left;
  width: 150px;
  text-align: center;
  padding: 10px;
  & > img {
    margin: 40px auto 10px auto;
  }
}

.left-info-mobile {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  & > img {
    margin: 0;
    width: 40px;
  }
  & > .pedestrian {
    width: 25px;
  }
  & > p {
    font-size: 12px;
  }
}
</style>
