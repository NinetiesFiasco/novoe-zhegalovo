<script lang="ts" setup></script>

<template>
  <div class="color-description">
    <!-- <div class="box unrenovated"></div>
    - без ремонта<br /> -->
    <div class="box unfinished"></div>
    - черновая
    <div class="box finished"></div>
    - чистовая
    <div class="box reserved"></div>
    - забронировано
  </div>
</template>

<style lang="scss" scoped>
.color-description {
  display: flex;

  .box {
    width: 23px;
    height: 23px;
    margin: 0 5px;
  }
  .box + .box {
    margin-left: 15px;
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
  .reserved {
    background: var(--color-reserved);
  }
}
</style>
