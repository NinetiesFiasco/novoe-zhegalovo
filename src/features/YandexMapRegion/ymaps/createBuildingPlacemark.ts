export default () => {
  const size: number = 96
  return new window.ymaps.Placemark(
    [55.906894, 37.982083],
    {
      hintContent: "ЖК Новое Жегалово",
      balloonContent: "ЖК Новое Жегалово",
    },
    {
      iconLayout: "default#image",
      iconImageHref: `icons/building.svg`,
      iconImageSize: [size, size],
      iconImageOffset: [-size * 1.1, -size * 0.4],
    },
  )
}
