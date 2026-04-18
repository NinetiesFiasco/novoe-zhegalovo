import { ref } from "vue"

export function useImageOffsets(emitLoaded: () => void) {
  const imgRef = ref<HTMLImageElement | null>(null)
  const containerRef = ref<HTMLDivElement | null>(null)
  const isSelectors = ref<boolean>(false)

  const update = () => {
    if (!imgRef.value || !containerRef.value) return

    const img = imgRef.value
    const container = containerRef.value

    const cw = container.clientWidth
    const ch = container.clientHeight

    const iw = img.naturalWidth
    const ih = img.naturalHeight

    const scale = Math.max(cw / iw, ch / ih)

    const renderedW = iw * scale
    const renderedH = ih * scale

    const offsetX = (renderedW - cw) * 0.58
    const offsetY = (renderedH - ch) / 2

    offsets.value = { scale, offsetX, offsetY, renderedW, renderedH }
  }

  const offsets = ref({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    renderedW: 0,
    renderedH: 0,
  })

  onMounted(() => {
    if (imgRef.value?.complete) {
      initSelectors()
    }
    update()
    window.addEventListener("resize", update)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", update)
  })

  function getPositionOffset(x: number, y: number) {
    const { renderedW, renderedH, offsetX, offsetY } = offsets.value

    const xPx = (x / 100) * renderedW - offsetX
    const yPx = (y / 100) * renderedH - offsetY

    return {
      left: xPx + "px",
      top: yPx + "px",
    }
  }

  function getSubDimensions(x1: number, y1: number, x2: number, y2: number) {
    const { renderedW, renderedH, offsetX, offsetY } = offsets.value

    const x1Px = (x1 / 100) * renderedW - offsetX
    const y1Px = (y1 / 100) * renderedH - offsetY
    const x2Px = (x2 / 100) * renderedW - offsetX
    const y2Px = (y2 / 100) * renderedH - offsetY

    return {
      width: x2Px - x1Px + "px",
      height: y2Px - y1Px + "px",
      //transform: "translate(-50%, -50%)",
    }
  }

  const initSelectors = (): void => {
    update()

    window.setTimeout(() => {
      isSelectors.value = true
    }, 500)
    emitLoaded()
  }

  return {
    offsets,
    imgRef,
    containerRef,
    isSelectors,
    update,
    getPositionOffset,
    getSubDimensions,
    initSelectors,
  }
}
