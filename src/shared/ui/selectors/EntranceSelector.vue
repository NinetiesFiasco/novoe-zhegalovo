<script lang="ts" setup>
const props = defineProps({
  entrance: { type: Number },
})
</script>

<template>
  <div>
    <svg
      class="icon"
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Кружок -->
      <circle
        class="circle"
        cx="20"
        cy="70"
        r="15"
        fill="none"
        stroke="white"
        stroke-width="2"
      />

      <!-- Диагональная линия вверх вправо -->
      <line
        class="line"
        x1="30"
        y1="60"
        x2="50"
        y2="30"
        stroke="white"
        stroke-width="2"
      />

      <!-- Горизонтальная линия -->
      <line
        class="line"
        x1="50"
        y1="30"
        x2="150"
        y2="30"
        stroke="white"
        stroke-width="2"
      />

      <!-- Текст -->
      <text class="text" x="50" y="20" font-size="16" fill="white">
        Подъезд №{{ props.entrance }}
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
