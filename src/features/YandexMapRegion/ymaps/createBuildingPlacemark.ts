export default (zoom: number, size: number) => {
  return new window.ymaps.Placemark(
    zoom === 11 ? [55.883, 37.94] : [55.87, 37.92],
    {
      hintContent: "Дом",
      balloonContent: "Мой дом",
    },
    {
      iconLayout: "default#image",
      iconImageHref: `icons/building.svg`,
      iconImageSize: [size, size],
      iconImageOffset: [-size / 2, -size],
    },
  )
}
