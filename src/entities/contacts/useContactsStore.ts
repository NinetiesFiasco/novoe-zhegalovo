import { defineStore } from "pinia"
import { ref } from "vue"

export const useContactsStore = defineStore("contacts", () => {
  const phone = ref<string>("+7 (495) 926-77-95")
  const mobilePhone = ref<string>("+7 (926) 011-03-26")
  const address = ref<string>("г. Щёлково ул. Жегаловская, д. 27")
  const email = ref<string>("smprodazhi@mail.ru")
  const workTime = ref<string>("(Пн-Вс с 10:00 до 21:00)")

  return { phone, mobilePhone, address, email, workTime }
})
