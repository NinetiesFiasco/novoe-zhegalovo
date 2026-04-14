import { defaultPlacemark } from "./defaultPlacemark"

export const createMetro = () => {
  const size = 64
  return new window.ymaps.Placemark(
    [55.810543, 37.799052],
    {
      hintContent: "Метро Щёлковская",
      balloonContent: "Метро Щёлковская",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: `/icons/metro.webp`,
      iconImageSize: [size, size],
      iconImageOffset: [-size / 2, -size],
    },
  )
}
