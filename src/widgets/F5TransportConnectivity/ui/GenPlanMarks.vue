<script lang="ts" setup>
const { position, text, arrow } = defineProps<{
  text: string
  position: any
  arrow: string
}>()

const goTo = () => {
  if (document) {
    document.getElementById("choose-flat")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <div
    :class="{
      'text-mark': true,
      'text-mark--right': arrow === 'right',
      'text-mark--bottom': arrow === 'bottom',
      'text-mark--left': arrow === 'left',
      'text-mark--top': arrow === 'top',
    }"
    :style="position"
    @click="goTo"
  >
    <div class="bg-transparency" />
    <span>{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.text-mark {
  // position: absolute;
  // cursor: pointer;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // height: 50px;
  // width: auto;
  // max-width: 260px;
  // text-align: center;

  // transition: 0.2s;

  // padding: 10px 14px;

  // background: rgba(255, 255, 255, 0.2);
  // color: #fff;
  // backdrop-filter: blur(2px);
  // -webkit-backdrop-filter: blur(2px);

  // border: 1px solid rgba(255, 255, 255, 0.4);
  // border-radius: 12px;

  position: absolute;

  padding: 10px 14px;
  max-width: 260px;

  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;

  color: #1f2937; /* тёмно-серый вместо чёрного */

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: scale(1.05);
  }
  padding: 10px 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  /* ХВОСТИК */
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
  }

  /* вниз */
  &--bottom::after {
    bottom: -11px;
    left: 20px;
    transform: rotate(90deg);
  }

  /* вверх */
  &--top::after {
    top: -11px;
    left: 20px;
    transform: rotate(90deg);
  }

  /* влево */
  &--left::after {
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }

  /* вправо */
  &--right::after {
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
