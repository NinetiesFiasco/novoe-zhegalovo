export default (isMobile: boolean) => {
  const size: number = isMobile ? 64 : 96
  const offset = isMobile
    ? [-size * 1.2, -size * 0.2]
    : [-size * 1.1, -size * 0.4]
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
      iconImageOffset: offset,
    },
  )
}
