export const defaultPlacemark = (
  zoom: number,
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
      iconContent: zoom === 11 || zoom === 12 ? hint : "",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: `/icons/${icon}`,
      iconImageSize: [32 * scale, 32 * scale],
      iconImageOffset: [-16 * scale, -32 * scale],
      ...((zoom === 11 || zoom === 12) && {
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
