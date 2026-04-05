<script lang="ts" setup></script>

<template>
  <div class="info-transport">
    <div class="voronok"></div>
    <h2 class="font-default">
      <span class="header-size font-bold">транспортная</span> доступность
    </h2>
    <p>
      <span class="accent font-bold">17км до МКАД:</span> можно проехать за 20
      минутна машине
    </p>
    <p>
      5 минут пешком до автобусной остановки и маршрутного такси
      <a
        target="_blank"
        href="https://yandex.ru/maps/10765/shelkovo/stops/stop__9676724/?ll=37.987953%2C55.902818&sctx=ZAAAAAgBEAAaKAoSCbNF0m70%2FUJAEemdCrjn80tAEhIJY0Z4exACkj8RcVRuopbmdj8iBgABAgMEBSgKOABAjVRIAWoCcnWdAc3MzD2gAQCoAQC9ATN9JXqCAhnQr9C90LTQtdC60YEg0LzQsNGA0LrQtdGCigIAkgIAmgIMZGVza3RvcC1tYXBzqgIMMTM5NzIyMjgxMTE5sAIB&sll=37.987953%2C55.902818&sspn=0.005050%2C0.001606&tab=overview&z=18.11"
      >
        Расписание Автобусов
      </a>
    </p>
    <p>
      15 минут пешком до станции Воронок.
      <a target="_blank" href="https://www.tutu.ru/station.php?nnst=49107">
        Расписание Электричек
      </a>
    </p>
    <p>
      <span class="accent font-bold">Всегда в центре событий:</span> Если вам
      нужно попасть в центр города Щёлково, на это уйдет не более 20 минут. Там
      вас ждут административные учреждения, театры, крупные торговые центры и
      вся городская инфраструктура.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.info-transport {
  width: 100%;
  height: 100%;
  font-size: 20px;

  & .voronok {
    background: url("/images/voronok.webp") center center / cover no-repeat;
    height: 50%;
  }

  & > h2 {
    color: var(--color-blue);
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 12px;

    & .header-size {
      font-size: 40px;
    }
  }
  & .accent {
    font-size: 20px;
  }
}
</style>
