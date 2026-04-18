<script lang="ts" setup></script>

<template>
  <div class="about-infrastructure">
    <div class="school" />
    <h2 class="header font-default">
      <span class="font-bold">Продуманная</span> инфраструктура для счастливой
      жизни
    </h2>
    <div class="info-text">
      <p>
        <span class="font-bold">Для самых маленьких:</span> Рядом с домом в 150
        и 200 метрах находятся 2 детских сада, расположены детские сады №20
        «Щелкунчик» и №30 «Ладушки» . Это значит, что дорога в садик будет
        приятной и безопасной прогулкой, без необходимости вставать ни свет ни
        заря, что особенно важно для семей с детьми.
      </p>

      <p>
        <span class="font-bold">Для школьников и студентов:</span> Во дворе
        микрорайона расположена (100 метров) школа №16 на 1200 мест. Ваши дети
        будут учиться в шаговой доступности от дома, в новом, светлом и хорошо
        оснащенном учебном заведении.
      </p>
      <p>
        <span class="font-bold">Для активного образа жизни:</span> Во дворе дома
        располагается баскетбольная, спортивная и детская площадки. На
        территории комплекса установлены современные детские игровые городки с
        яркими качелями, где ваш ребенок найдет новых друзей .
      </p>
      <p>
        <span class="font-bold">Для удобной жизни:</span> В соседнем подъезде
        располагается магазин дикси, в 200 метрах находится пятёрочка и магнит,
        аптеки в шаговой доступности, на территории ЖК присутствуют ПВЗ,
        работают службы доставки.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-infrastructure {
  width: 100%;
  height: 100%;
  font-size: 18px;

  & .header {
    font-size: 20px;
  }

  & .school {
    background: url("/images/school.webp") center 75% / cover no-repeat;
    height: 300px;
    border-radius: 15px;
  }

  & > h2 {
    color: var(--color-blue);
    font-size: clamp(20px, 2.6vw, 40px);
    text-transform: uppercase;
    margin-top: 12px;
    height: 50px;
  }

  & .info-text {
    overflow-y: auto;
    flex: 1;
    scrollbar-width: thin;
    font-size: 15px;
  }
}
</style>
