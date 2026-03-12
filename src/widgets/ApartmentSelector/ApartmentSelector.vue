<script lang="ts" setup>
import { ApartmentView } from "~/features"
const floors: number = 18
</script>

<template>
  <div class="apartments">
    <div class="apartment-selector">
      <p class="head-p">доступные</p>
      <h2>планировки квартир</h2>
      <fieldset>
        <legend>Подъезд</legend>

        <label><input type="radio" name="apartment" value="1" />1</label>
        <label><input type="radio" name="apartment" value="2" />2</label>
        <label><input type="radio" name="apartment" value="3" />3</label>
      </fieldset>
      <h2>Этажи</h2>
      <div class="all-apartments">
        <div v-for="floor in 19" :key="floor">{{ floor }}</div>
      </div>
      <div class="color-description">
        <div class="box unrenovated"></div>
        - без ремонта
        <div class="box unfinished"></div>
        - черновая
        <div class="box finished"></div>
        - чистовая
      </div>
    </div>
    <div class="apartment-view">
      <ApartmentView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apartments {
  display: flex;
  width: 100%;

  .all-apartments {
    & > div {
      border-bottom: 1px solid black;
    }
  }
  .color-description {
    display: flex;
    .box {
      width: 23px;
      height: 23px;
    }
    .unrenovated {
      background: var(--color-unrenovated);
    }
    .unfinished {
      background: var(--color-unfinished);
    }
    .finished {
      background: var(--color-fully-finished);
    }
  }

  .apartment-view {
    flex: 1;
  }
}
</style>
