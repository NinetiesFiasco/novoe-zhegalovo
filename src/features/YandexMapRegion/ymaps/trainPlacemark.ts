import { defaultPlacemark } from "./defaultPlacemark"

export const createTrain = (zoom: number) => {
  return defaultPlacemark(
    zoom,
    [55.8709, 37.68],
    "На поезде до Ярославского вокзала 40 минут",
    "На поезде до Ярославского вокзала 40 минут",
    "train.svg",
    zoom === 9 ? 1 : 2,
    "bottom: 15px; right: -25px;",
  )
}
