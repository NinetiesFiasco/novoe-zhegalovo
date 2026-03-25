let baseURL;

const defaultPlacemark = (coords: Array<number>, hint: string, balloon: string, icon: string): any => {
  return new window.ymaps.Placemark(
    coords,
    {
      hintContent: hint,
      balloonContent: balloon,
    },
    {
      iconLayout: "default#image",
      iconImageHref: `${baseURL}icons/yandex/${icon}`,
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -32],
    }
  )
}

const createPlaceMarks = (_baseURL: string): any => {
  baseURL = _baseURL;
  const building = new window.ymaps.Placemark(
    [55.906946, 37.981561],
    {
      hintContent: "Дом",
      balloonContent: "Мой дом",
    },
    {
      iconLayout: "default#image",
      iconImageHref: `${baseURL}icons/yandex/building.png`,
      iconImageSize: [64, 64],
      iconImageOffset: [-32, -64],
    },
  )

  const school = defaultPlacemark([55.906133, 37.98451], "Школа", 
    `<a href="https://sch16-schel.edumsko.ru/" target="_blank">Средняя образовательная школа №16</a>`,
    "school.svg")

  const tbank = defaultPlacemark([55.907397, 37.982459], "Т-Банк", "Банкомат Т-Банк", "tbank.svg")

  const diksy = defaultPlacemark([55.907391, 37.98295], "Дикси", "Супермаркет дикси", "diksy.svg")

  const sdek = defaultPlacemark([55.904887, 37.984828], "СДЕК", "Пункт выдачи CDEK", "sdek.svg")

  const five = defaultPlacemark([55.905257, 37.98816], "Пятерочка", "Супермаркет пятерочка", "5x.svg")

  const sad = defaultPlacemark([55.903439, 37.984418], "Детский сад", "Детский сад Щелкунчик", "kidPlayGround.svg")
  const sad2 = defaultPlacemark([55.907145, 37.987078], "Детский сад", "Детский сад Щелкунчик", "kidPlayGround.svg")

  const ozon1 = defaultPlacemark([55.907436, 37.982956], "OZON", "Пункт выдачи заказов OZON", "ozon.svg")
  const ozon2 = defaultPlacemark([55.905739, 37.981791], "OZON", "Пункт выдачи заказов OZON", "ozon.svg")
  const ozon3 = defaultPlacemark([55.904446, 37.985297], "OZON", "Пункт выдачи заказов OZON", "ozon.svg")


  const busStop = defaultPlacemark([55.903279, 37.987172], "Автобусная остановка", 
    "Автобусная остановка, 5 минут пешком от дома, <a href='https://yandex.com/maps/10765/shelkovo/stops/stop__9676724/?ll=37.987953%2C55.902818&tab=overview&z=18' target='_blank'>Расписание</a>",
  "busStop.png")

  const JDStation = defaultPlacemark([55.919120, 37.973975], "ЖД станция Воронок", 
    "ЖД станция Воронок, 10 минут пешком от дома, <a href='https://www.tutu.ru/station.php?nnst=49107&date=all' target='_blank'>Расписание</a>",
  "JDStation.png")

  return [
    building,
    tbank,
    diksy,
    school,
    sdek,
    five,
    sad,
    sad2,
    ozon1,
    ozon2,
    ozon3,
    busStop,
    JDStation
  ]
}

export { createPlaceMarks }
