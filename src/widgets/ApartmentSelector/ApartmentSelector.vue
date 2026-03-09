<script lang="ts" setup>
const floors: number = 18
</script>

<template>
  <div>
    <fieldset>
      <legend>Подъезд</legend>

      <label>
        <input type="radio" name="apartment" value="1" />
        1
      </label>

      <label>
        <input type="radio" name="apartment" value="2" />
        2
      </label>

      <label>
        <input type="radio" name="apartment" value="3" />
        3
      </label>
    </fieldset>
    <h2>Этажи</h2>
    <div class="all-apartments">
      <div v-for="floor in 19" :key="floor">{{ floor }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-apartments {
  & > div {
    border-bottom: 1px solid black;
  }
}
</style>
