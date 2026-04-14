<script lang="ts" setup></script>

<template>
  <div class="map-infographic">
    <img class="pedestrian" src="/icons/pedestrian.svg" alt="Иконка пешехода" />
    <p>
      <b>15 минут</b> пешком до Ж/Д станции Воронок или <b>5 минут</b> до
      автобусной остановки
    </p>
    <img class="train" src="/icons/train.svg" alt="Иконка поезда" />
    <p>
      До Ярославского вокзала можно проехать за <b>40 минут</b> на электропоезде
    </p>
    <img class="bus" src="/icons/bus.svg" alt="Иконка поезда" />
    <p>Автобус едет <b>20 минут</b> до станции метро Щёлковская</p>
  </div>
</template>

<style lang="scss" scoped>
.map-infographic {
  display: flex;
  flex-direction: column;
  width: 250px;
  text-align: center;
  padding: 10px;
  & > img {
    margin: 10px auto 10px auto;
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
    width: 20px;
  }
  & > p {
    font-size: 12px;
  }
}
</style>
