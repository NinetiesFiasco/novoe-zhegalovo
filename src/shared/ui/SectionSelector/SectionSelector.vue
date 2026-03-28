<script lang="ts" setup>
const props = defineProps({
  entrance: { type: Number },
})
</script>

<template>
  <div>
    <svg
      class="icon"
      width="500"
      height="170"
      viewBox="0 0 500 170"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Кружок -->
      <circle
        class="circle"
        cx="390"
        cy="103"
        r="25"
        fill="none"
        stroke="white"
        stroke-width="2"
      ></circle>
      <!-- Диагональная линия вверх вправо -->
      <line
        class="line"
        x1="350"
        y1="30"
        x2="380"
        y2="80"
        stroke="white"
        stroke-width="2"
      ></line>
      <!-- Горизонтальная линия -->
      <line
        class="line"
        x1="20"
        y1="30"
        x2="350"
        y2="30"
        stroke="white"
        stroke-width="2"
      ></line>
      <!-- Текст -->
      <text class="text" x="30" y="20" font-size="16" fill="white">
        Подъезды 1,2,3 Выбрать недвижимость
      </text>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.circle,
.line {
  stroke: white;
  transition: stroke 0.3s ease;
}
.text {
  fill: white;
  transition: fill 0.3s ease;
}
.icon:hover .text {
  fill: var(--color-blue);
}
.icon:hover .line,
.icon:hover .circle {
  stroke: var(--color-blue);
}
</style>
