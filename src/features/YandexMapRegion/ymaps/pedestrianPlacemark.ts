import { defaultPlacemark } from "./defaultPlacemark"

export const createPedestrianPlacemark = (zoom: number) => {
  return [
    defaultPlacemark(
      zoom,
      [55.902248, 37.998059],
      "Пешком до автобусной остановки 5 минут",
      "Пешком до автобусной остановки 5 минут",
      "pedestrian.svg",
      1,
      "bottom: -40px; left: 40px;",
    ),

    defaultPlacemark(
      zoom,
      [55.925617, 37.959522],
      `15 минут до ж/д станции "Воронок" `,
      "Пешком до ЖД станции воронок 15 минут",
      "pedestrian.svg",
      1,
      "bottom: 0px; left: 30px;",
    ),
  ]
}
