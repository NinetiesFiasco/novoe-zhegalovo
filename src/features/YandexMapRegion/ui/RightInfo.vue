<script lang="ts" setup>
const { isMobile } = useDevice()
</script>

<template>
  <div :class="isMobile ? 'right-info-mobile' : 'right-info'">
    <img class="pedestrian" src="/icons/pedestrian.svg" alt="Иконка пешехода" />
    <p>До автобусной остановки 5 минут пешком</p>
    <img class="bus" src="/icons/bus.svg" alt="Иконка поезда" />
    <p>Автобус едет 20 минут до станции метро Щёлковская</p>
  </div>
</template>

<style lang="scss" scoped>
.right-info {
  grid-area: right;
  width: 150px;
  text-align: center;
  padding: 10px;
  & > img {
    margin: 40px auto 10px auto;
  }
}

.right-info-mobile {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  & > .pedestrian {
    width: 25px;
  }
  & > .bus {
    width: 55px;
  }
  & > img {
    margin: 0;
    width: 40px;
  }
  & > p {
    font-size: 12px;
  }
}
</style>
