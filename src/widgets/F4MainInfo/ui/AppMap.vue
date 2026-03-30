<script lang="ts" setup></script>

<template>
  <div class="app-map">
    <div class="positioner">
      <img src="/images/map.png" alt="Карта проезда к Москве" />
      <h2 class="jk">ЖК "Новое Жегалово"</h2>
    </div>
    <div class="pedestrian">
      <h3>15 минут</h3>
      <p>до ж/д станции "Воронок"</p>
    </div>
    <div class="bus">
      <h3>20 минут</h3>
      <p>до станции метро "Щёлковская"</p>
    </div>
    <div class="train">
      <h3>40 минут</h3>
      <p>до Ярославского вокзала</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-map {
  width: 100%;
  height: 100%;

  position: relative;

  & .positioner {
    position: relative;
    padding: 30px 0 30px 250px;
    left: 0;
    top: 0;

    & > img {
      width: 75%;
    }

    & > h2 {
      position: absolute;
      right: 31%;
      font-size: 20px;
      width: 150px;
      top: 22%;

      &::after {
        content: "";
        border: 10px solid var(--color-grey);
        border-radius: 10px;
        position: absolute;
        right: 10px;
        top: 0;
      }
    }
  }

  & > div {
    position: absolute;
    left: 100px;
  }

  & > div > h3 {
    margin-top: 50px;
    white-space: nowrap;
  }
  & > div > p {
    width: 150px;
  }

  & .pedestrian {
    background: url("/icons/pedestrian.png") center center / contain no-repeat;
    height: 50px;
    width: 50px;
    top: 150px;
  }
  & .bus {
    background: url("/icons/bus.png") center center / contain no-repeat;
    height: 50px;
    width: 50px;
    top: 300px;
  }
  & .train {
    background: url("/icons/train.png") center center / contain no-repeat;
    height: 50px;
    width: 50px;
    top: 450px;
  }
}
</style>
