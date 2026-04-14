import { defaultPlacemark } from "./defaultPlacemark"

export const createTrain = () => {
  return defaultPlacemark(
    [55.8709, 37.68],
    "На поезде до Ярославского вокзала 40 минут",
    "На поезде до Ярославского вокзала 40 минут",
    "train.svg",
    2.5,
    "bottom: 15px; right: -25px;",
  )
}
