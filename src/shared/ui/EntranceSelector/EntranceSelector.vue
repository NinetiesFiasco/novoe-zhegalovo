<script lang="ts" setup>
const props = defineProps({
  entrance: { type: Number },
})
</script>

<template>
  <div>
    <svg
      class="icon"
      width="300"
      height="120"
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Кружок -->
      <circle
        class="circle"
        cx="30"
        cy="90"
        r="15"
        fill="none"
        stroke="white"
        stroke-width="2"
      />

      <!-- Диагональная линия вверх вправо -->
      <line
        class="line"
        x1="40"
        y1="80"
        x2="60"
        y2="50"
        stroke="white"
        stroke-width="2"
      />

      <!-- Горизонтальная линия -->
      <line
        class="line"
        x1="60"
        y1="50"
        x2="200"
        y2="50"
        stroke="white"
        stroke-width="2"
      />

      <!-- Текст -->
      <text class="text" x="70" y="40" font-size="16" fill="white">
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
