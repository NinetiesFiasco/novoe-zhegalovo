<script lang="ts" setup></script>

<template>
  <div class="apartment-container">
    <h3>2-комнатная квартира</h3>
    <div class="floor-plan">
      <img src="/images/floor-plan/floor-plan.png" />
    </div>
    <table class="params">
      <thead>
        <tr>
          <th>Площадь</th>
          <th>Подъезд</th>
          <th>Этаж</th>
          <th>Вид отделки</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>65,8 м<sup>2</sup></td>
          <td>1</td>
          <td>8</td>
          <td>чистовая</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h4>Цена: 7 000 000 ₽</h4>
      <p>Цена за метр: 106 382,98 ₽ за м<sup>2</sup></p>
    </div>
    <hr />
    <div class="additional-features">
      <h4>Дополнительные характеристики</h4>
      <p>Пример чистовой отделки</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartment-container {
  padding: 20px;
  border: 2px solid var(--color-grey-bright);
  border-radius: var(--radius-md);

  & > h3 {
    color: var(--color-blue);
  }

  & .params {
    border-spacing: 40px;
    & th {
      color: var(--color-blue);
    }
  }

  & .additional-features {
    & > h4 {
      display: inline-flex;
      position: relative;
      color: var(--color-blue);
      margin-bottom: 10px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: var(--color-blue);
        filter: blur(3px);
      }
    }
  }
}
</style>
