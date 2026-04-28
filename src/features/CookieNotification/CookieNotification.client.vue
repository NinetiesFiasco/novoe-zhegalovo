<script lang="ts" setup>
const visible = ref(false)
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
  const accepted = localStorage.getItem("cookiesAccepted")
  if (!accepted) {
    visible.value = true
  }
})

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true")
  visible.value = false
}
</script>

<template>
  <div v-if="mounted && visible" class="cookie-banner">
    <div class="middle">
      <span> Мы используем cookies для улучшения работы сайта. </span>
      <button @click="acceptCookies">Принять</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  font-family: sans-serif;

  & .middle {
    max-width: 700px;
    background: white;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid black;
    margin-bottom: 3px;

    & button {
      background: #4caf50;
      border: none;
      color: white;
      padding: 8px 14px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 50px;
    }

    & button:hover {
      background: #45a049;
    }
  }
}
</style>
