import { defaultPlacemark } from "./defaultPlacemark"

export const createBus = () => {
  return defaultPlacemark(
    [55.825, 37.88],
    "На автобусе до станции метро Щелковская 20 минут",
    "На автобусе до станции метро Щелковская 20 минут",
    "bus.svg",
    2.5,
    "bottom: -10px; right: -35px;",
  )
}
