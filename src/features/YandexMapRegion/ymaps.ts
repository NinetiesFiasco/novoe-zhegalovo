let zoom: number
const defaultPlacemark = (
  coords: Array<number>,
  hint: string,
  balloon: string,
  icon: string,
  scale: number = 1,
  css?: string,
): any => {
  return new window.ymaps.Placemark(
    coords,
    {
      hintContent: hint,
      balloonContent: balloon,
      iconContent: zoom === 11 ? hint : "",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: `/icons/${icon}`,
      iconImageSize: [32 * scale, 32 * scale],
      iconImageOffset: [-16 * scale, -32 * scale],
      ...(zoom === 11 && {
        iconContentLayout: window.ymaps.templateLayoutFactory.createClass(
          `
          <div style="
            position: absolute;
            font-weight: bold;
            color: black;
            background: white;
            padding: 4px 8px;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            width: 150px;
            ${css}
          ">
            $[properties.iconContent]
          </div>
        `,
        ),
      }),
    },
  )
}

const createYaMapObjects = (_zoom: number): any => {
  zoom = _zoom

  let buildingSize = zoom === 11 ? 96 : zoom === 10 ? 64 : 32

  const building = new window.ymaps.Placemark(
    zoom === 11 ? [55.883, 37.94] : [55.87, 37.92],
    {
      hintContent: "Дом",
      balloonContent: "Мой дом",
    },
    {
      iconLayout: "default#image",
      iconImageHref: `icons/building.svg`,
      iconImageSize: [buildingSize, buildingSize],
      iconImageOffset: [-buildingSize / 2, -buildingSize],
    },
  )

  const walkToTrainRoute = new window.ymaps.Polyline(
    [
      [55.90641, 37.982606],
      [55.918986, 37.973851],
    ],
    {},
    {
      strokeColor: "#22C55E",
      strokeWidth: 2,
    },
  )
  const trainRoute = new window.ymaps.Polyline(
    [
      [55.918986, 37.973851],
      [55.928099, 37.939213],
      [55.924403, 37.884249],
      [55.926108, 37.863903],
      [55.924805, 37.777628],
      [55.922693, 37.770888],
      [55.912108, 37.758367],
      [55.853737, 37.673075],
      [55.841149, 37.669883],
      [55.828715, 37.671289],
      [55.824199, 37.67006],
      [55.821356, 37.668748],
      [55.804941, 37.654134],
      [55.801888, 37.651511],
      [55.795235, 37.648438],
      [55.77723, 37.658054],
    ],
    {},
    {
      strokeColor: "#2563EB",
      strokeWidth: 2,
    },
  )
  const walkToBusRoute = new window.ymaps.Polyline(
    [
      [55.90641, 37.982606],
      [55.90322, 37.986982],
    ],
    {},
    {
      strokeColor: "#22C55E",
      strokeWidth: 2,
    },
  )
  const busRoute = new window.ymaps.Polyline(
    [
      [55.90322, 37.986982],
      [55.897537, 37.980634],
      [55.895784, 37.980931],
      [55.89146, 37.987775],
      [55.886982, 37.993074],
      [55.880988, 38.003604],
      [55.874813, 37.997107],
      [55.864769, 37.990245],
      [55.858861, 37.983001],
      [55.848537, 37.963944],
      [55.840457, 37.948875],
      [55.839105, 37.947565],
      [55.834564, 37.944862],
      [55.832545, 37.936726],
      [55.830697, 37.922252],
      [55.824804, 37.885283],
      [55.821639, 37.865296],
      [55.818016, 37.851022],
      [55.815047, 37.84362],
      [55.814229, 37.841078],
      [55.81321, 37.831052],
      [55.810593, 37.810828],
      [55.810231, 37.798329],
    ],
    {},
    {
      strokeColor: "#2563EB",
      strokeWidth: 2,
    },
  )

  const busPedestrian = defaultPlacemark(
    [55.902248, 37.998059],
    "Пешком до автобусной остановки 5 минут",
    "Пешком до автобусной остановки 5 минут",
    "pedestrian.svg",
    1,
    "bottom: -40px; left: 40px;",
  )

  const trainPedestrian = defaultPlacemark(
    [55.925617, 37.959522],
    `15 минут до ж/д станции "Воронок" `,
    "Пешком до ЖД станции воронок 15 минут",
    "pedestrian.svg",
    1,
    "bottom: 0px; left: 30px;",
  )

  const busIcon = defaultPlacemark(
    [55.825, 37.88],
    "На автобусе до станции метро Щелковская 20 минут",
    "На автобусе до станции метро Щелковская 20 минут",
    "bus.svg",
    2.5,
    "bottom: -10px; right: -35px;",
  )

  const trainIcon = defaultPlacemark(
    [55.8709, 37.68],
    "На поезде до Ярославского вокзала 40 минут",
    "На поезде до Ярославского вокзала 40 минут",
    "train.svg",
    2,
    "bottom: 15px; right: -25px;",
  )

  return [
    building,
    walkToBusRoute,
    busRoute,
    walkToTrainRoute,
    trainRoute,
    busPedestrian,
    trainPedestrian,
    busIcon,
    trainIcon,
  ]
}

export { createYaMapObjects }
