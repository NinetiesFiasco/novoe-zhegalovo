export const createYarick = () => {
  const size = 64
  return new window.ymaps.Placemark(
    [55.776895, 37.656913],
    {
      hintContent: "Ярославский вокзал",
      balloonContent: "Ярославский вокзал",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: `/icons/yarik.png`,
      iconImageSize: [size, size],
      iconImageOffset: [-size / 2, -size],
    },
  )
}
