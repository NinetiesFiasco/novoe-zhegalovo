const Benefits = {
  Main: "main",
  Infrastructure: "infrastructure",
  Environment: "environment",
  Parking: "parking",
  Prices: "prices",
} as const

type TBenefits = (typeof Benefits)[keyof typeof Benefits]

const BenefitsUI: Record<TBenefits, string> = {
  main: "Основное",
  infrastructure: "Инфраструктура",
  environment: "Природа",
  parking: "Парковки",
  prices: "Цены",
}

const isBenefit = (value: string): value is TBenefits => {
  return Object.values(Benefits).includes(value as TBenefits)
}

interface Description {
  head: string
  paragraphs: string[]
}
type TBenefitDescription = Record<TBenefits, Description>

const BenefitDescription: TBenefitDescription = {
  main: {
    head: " Жилой комплекс «Новое Жегалово»",
    paragraphs: [],
  },
  infrastructure: {
    head: "Развитая инфраструктура рядом с домом",
    paragraphs: [
      "Магазины и сервисы рядом",
      "Детские сады и школы поблизости",
      "Аптеки и медицинские центры",
      "Супермаркеты для ежедневных покупок",
      "Спортивные и детские площадки",
      "Всё необходимое — рядом с домом",
      "Инфраструктура для комфортной жизни",
    ],
  },
  environment: {
    head: "Природа в шаговой доступности.",
    paragraphs: [
      "Озеро рядом с домом",
      "Лес и поля в пешей доступности",
      "Свежий воздух каждый день",
      "Живописные прогулочные маршруты",
      "Пространство для отдыха и спорта",
      "Природа вокруг жилого комплекса",
      "Тишина и зелёное окружение",
    ],
  },
  parking: {
    head: "Продуманная организация автомобильного движения",
    paragraphs: [
      "Парковочные места рядом с домом",
      "Удобные подъезды к жилым корпусам",
      "Продуманная схема движения",
      "Быстрый выезд на основные дороги",
      "Гостевые парковочные места",
      "Комфорт для автомобилистов",
      "Безопасное движение на территории",
    ],
  },
  prices: {
    head: "Выгодные цены напрямую от застройщика",
    paragraphs: [
      "Цены напрямую от застройщика",
      "Без посредников и переплат",
      "Выгодное предложение в районе",
      "Разные планировки и бюджеты",
      "Гибкие условия покупки",
      "Отличное соотношение цены и качества",
      "Перспективная инвестиция",
    ],
  },
}

export { Benefits, BenefitsUI, isBenefit, BenefitDescription }
export type { TBenefits }
