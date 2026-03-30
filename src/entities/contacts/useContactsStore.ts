import { defineStore } from "pinia"
import { ref } from "vue"

export const useContactsStore = defineStore("contacts", () => {
  const phone = ref<string>("+7 (ХХХ) ХХ-ХХ-ХХ")
  const address = ref<string>("")
  const email = ref<string>("")
  const workTime = ref<string>("(Пн-Вс с 10:00 до 21:00)")

  return { phone, address, email, workTime }
})
