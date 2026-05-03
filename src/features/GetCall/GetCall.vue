<script lang="ts" setup>
import { getCall } from "~/shared/api"
import PrivacyCheckbox from "./ui/PrivacyCheckbox.vue"

const props = defineProps<{
  status: string
}>()

const isActive = ref<boolean>(false)
const isPolitic = ref<boolean>(false)

const name = ref("")
const phone = ref("")
const company = ref("")

const closeModal = () => {
  isActive.value = false
  isPolitic.value = false
}

const submitForm = () => {
  if (phone.value.length === 18 && isPolitic.value) {
    getCall(name.value, phone.value, company.value)
    closeModal()
  }
}
</script>

<template>
  <div @click="isActive = true" class="get-call"><slot /></div>
  <Teleport to="body">
    <div
      :class="{
        'modal-overlay': true,
        active: isActive,
      }"
      @click.self="closeModal"
    >
      <div class="modal-window">
        <button class="modal-close" @click="closeModal">✕</button>

        <h2>Заказать звонок</h2>

        <form @submit.prevent="submitForm" class="modal-form">
          <input
            v-model="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
          />
          <input
            v-model="phone"
            v-maska="'+7 (###) ###-##-##'"
            name="phone"
            type="tel"
            placeholder="Телефон"
            required
          />
          <input
            v-model="phone"
            name="company"
            placeholder="Компания"
            style="display: none"
            required
          />

          <button @click="submitForm" class="modal-submit">Отправить</button>
          <div>
            <PrivacyCheckbox v-model="isPolitic" />
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.get-call {
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background: #555;
  }
}

/* OVERLAY */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;

  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}

.modal-overlay.active {
  display: flex;
  opacity: 1;
  pointer-events: all;
}

/* МОДАЛКА */
.modal-window {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;

  padding: 30px;
  width: 320px;

  color: #fff;
  position: relative;
}

/* КРЕСТИК */
.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

/* ФОРМА */
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.modal-form input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
}

/* КНОПКА */
.modal-submit {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.modal-submit:hover {
  background: #333;
}
</style>
