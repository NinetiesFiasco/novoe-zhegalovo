// export default defineNuxtPlugin(() => {
// if (process.server) return

// const config = useRuntimeConfig()

// if (document.getElementById("yandex-maps-script")) return

// const script = document.createElement("script")
// script.id = "yandex-maps-script"
// script.src = `https://api-maps.yandex.ru/2.1/?apikey=${config.public.yandexMapsKey}&lang=ru_RU`
// script.async = true

// document.head.appendChild(script)
// })

// src/plugins/yandex-maps.client.ts
export default defineNuxtPlugin(() => {
  if (process.server) return

  const config = useRuntimeConfig()

  if ((window as any)._yandexMapsPromise) {
    return
  }

  ;(window as any)._yandexMapsPromise = new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${config.public.yandexMapsKey}&lang=ru_RU`
    script.onload = () => resolve(true)
    document.head.appendChild(script)
  })
})
