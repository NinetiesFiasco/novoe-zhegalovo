<script lang="ts" setup></script>

<template>
  <div class="jk-comfort">
    <p>
      современный проект комфорт-класса, расположенный в экологически
      благоприятной части города Щёлково.
    </p>
    <h2>Цены от застройщика!</h2>
    <div>
      <p>Удобная транспортная доступность</p>
      <ul>
        <li>17км до МКАД можно проехать за 20 минут на машине</li>
        <li>
          5 минут пешком до Фряновского шоссе с сообщением с Москвой
          <a
            target="_blank"
            href="https://yandex.ru/maps/10765/shelkovo/stops/stop__9676724/?ll=37.987953%2C55.902818&sctx=ZAAAAAgBEAAaKAoSCbNF0m70%2FUJAEemdCrjn80tAEhIJY0Z4exACkj8RcVRuopbmdj8iBgABAgMEBSgKOABAjVRIAWoCcnWdAc3MzD2gAQCoAQC9ATN9JXqCAhnQr9C90LTQtdC60YEg0LzQsNGA0LrQtdGCigIAkgIAmgIMZGVza3RvcC1tYXBzqgIMMTM5NzIyMjgxMTE5sAIB&sll=37.987953%2C55.902818&sspn=0.005050%2C0.001606&tab=overview&z=18.11"
          >
            Расписание Автобусов
          </a>
        </li>
        <li>
          2км пешком до станции Воронок, или 10 минут на такси.
          <a target="_blank" href="https://www.tutu.ru/station.php?nnst=49107">
            Расписание Электричек
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jk-comfort {
  & a {
    text-decoration: none;
  }
  & ul {
    margin-left: 25px;
  }
}
</style>
