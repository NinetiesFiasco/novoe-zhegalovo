<script lang="ts" setup>
const { modelValue } = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (e: "update:modelValue"): void
}>()
const val = computed({
  set: (val) => emit("update:modelValue"),
  get: () => modelValue,
})
</script>

<template>
  <div class="privacy-policy">
    <input type="checkbox" v-model="val" label="policy" />
    <label for="policy"
      >Согласен с
      <NuxtLink to="/privacy"> политикой конфиденциальности</NuxtLink></label
    >
  </div>
</template>

<style lang="scss" scoped>
.privacy-policy {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  font-size: 18px;
  line-height: 1.4;
  color: white;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;

    width: 16px;
    height: 16px;
    min-width: 16px;

    border: 1.5px solid rgba(97, 184, 238, 0.6);
    border-radius: 4px;
    background: #fff;

    cursor: pointer;
    position: relative;

    transition: all 0.2s ease;

    &:hover {
      border-color: var(--color-blue);
      box-shadow: 0 0 0 3px rgba(97, 184, 238, 0.15);
    }

    &:checked {
      background: var(--color-blue);
      border-color: var(--color-blue);
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;

      width: 4px;
      height: 8px;

      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    &:focus-visible {
      outline: 2px solid var(--color-blue);
      outline-offset: 2px;
    }
  }

  label {
    cursor: pointer;

    a {
      color: var(--color-blue);
      text-decoration: none;
      border-bottom: 1px solid rgba(97, 184, 238, 0.4);

      transition: all 0.2s ease;

      &:hover {
        color: #2aa3e8;
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
