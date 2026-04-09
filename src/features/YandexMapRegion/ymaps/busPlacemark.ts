import { defaultPlacemark } from "./defaultPlacemark"

export const createBus = (zoom: number) => {
  return defaultPlacemark(
    zoom,
    [55.825, 37.88],
    "На автобусе до станции метро Щелковская 20 минут",
    "На автобусе до станции метро Щелковская 20 минут",
    "bus.svg",
    zoom === 9 ? 1 : 2.5,
    "bottom: -10px; right: -35px;",
  )
}
