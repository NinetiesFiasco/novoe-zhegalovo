<script lang="ts" setup>
const { isMobile } = useDevice()
</script>

<template>
  <div
    :class="{
      'label-container': true,
      'label-container-mobile': isMobile,
    }"
  >
    <div class="background" />
    <h2>Цены от застройщика!</h2>
  </div>
</template>

<style lang="scss" scoped>
.label-container {
  position: absolute;
  top: 20px;
  right: 50px;
  width: 500px;

  & > .background {
    background: white;
    width: 100%;
    height: 60px;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;
    z-index: 90;
    border-radius: var(--radius-md);
  }
  & > h2 {
    color: white;
    font-size: 40px;
    text-align: center;
    z-index: 100;
    user-select: none;
  }
}

.label-container-mobile {
  width: 70%;
  left: 15%;

  & > .background {
    width: 100%;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;
    z-index: 90;
    border-radius: var(--radius-md);
  }

  & > h2 {
    font-size: 20px;
  }
}
</style>
