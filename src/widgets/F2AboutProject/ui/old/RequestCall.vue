<script lang="ts" setup>
const isOpen = ref<boolean>(false)
const phone = ref<string>("")
const name = ref<string>("")
const toggle = () => {
  isOpen.value = !isOpen.value
}
const makeRequest = () => {}

</script>

<template>

  <div class="request-call font-bold" @click="toggle">
    <div>Заказать обратный звонок</div>
  </div>

  <div v-if="isOpen" class="request-call-menu transparent-bg">

    <div class="form">
      <button class="close" @click="toggle">Закрыть</button>
      <div class="name">
        <label>Имя</label>
          <input type="text" v-model="name" placeholder="Введите имя"></input>
        </div>
        <div class="phone">
          <label>Телефон</label>
          <input type="tel" v-model="phone" v-maska="'+7 (###) ###-##-##'" />
        </div>
      <button class="make-request" @click="makeRequest">Заказать</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.request-call {
  position: absolute;
  bottom: 100px;
  right: 25px;
  font-size: 30px;
  color: var(--color-white);
  cursor: pointer;
  user-select: none;

  & > div > a {
    color: var(--color-white);
    text-decoration: none;
  }
}

.request-call-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(255, 255, 255, 0.5);

  & .form {
    background: white;
    width: 600px;
    margin: 100px auto 0;
    padding: 15px;
    border-radius: 15px;
    

    & .close {
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      background-color: rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:active {
        transform: scale(0.97);
      }
      &:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
    }

    & .name {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;

      & label {
        font-size: 13px;
        color: #555;
      }

      & input {
        padding: 10px 12px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 8px;
        outline: none;
        transition: all 0.2s ease;
      }
      
      /* при фокусе */
      & input:focus {
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
      }

      /* hover */
      & input:hover {
        border-color: #bbb;
      }

      /* placeholder */
      & input::placeholder {
        color: #aaa;
      }
    }

  & .phone {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;

      & label {
        font-size: 13px;
        color: #555;
      }

      & input {
        padding: 10px 12px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 8px;
        outline: none;
        transition: all 0.2s ease;
      }

      & input:focus {
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
      }

      & input:hover {
        border-color: #bbb;
      }

      * input::placeholder {
        color: #aaa;
      }
    }

    .make-request {
      padding: 10px 18px;
      font-size: 14px;
      font-weight: 500;
      color: white;
      background-color: #111;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
      
      &:hover {
        background-color: #333;
      }
    }

  }
}
</style>
