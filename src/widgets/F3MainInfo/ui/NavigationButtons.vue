<script lang="ts" setup></script>

<template>
  <div class="features__nav">
    <button class="features__btn prev">←</button>
    <button class="features__btn next">→</button>
  </div>
</template>

<style lang="scss" scoped>
.features__nav {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  gap: 10px;
}

.features__btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #fff;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
}

.features__btn:hover {
  background: #007aff;
  color: #fff;
}
</style>
