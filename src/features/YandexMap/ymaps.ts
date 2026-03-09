const createPlaceMarks = (): any => {
  const base = new window.ymaps.Placemark([55.906946, 37.981561], {
    balloonContent: "Наш офис",
    hintContent: "Нажмите для информации",
  })

  const building = new window.ymaps.Placemark(
    [55.906946, 37.981561],
    {
      hintContent: "Дом",
      balloonContent: "Мой дом",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "/icons/building.png", // путь к картинке
      iconImageSize: [64, 64], // размер иконки
      iconImageOffset: [-32, -64], // якорь (центр по X, низ по Y)
    },
  )

  return [base, building]
}

export { createPlaceMarks }
