import { ref, onMounted, onUnmounted } from "vue"

export function useDevice() {
  const isMobile = ref(false)

  const checkDevice = () => {
    const byUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent,
    )

    const byScreen = window.innerWidth <= 900

    isMobile.value = byUA || byScreen
  }

  onMounted(() => {
    checkDevice()
    window.addEventListener("resize", checkDevice)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", checkDevice)
  })

  return {
    isMobile,
  }
}
