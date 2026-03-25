const Benefits = {
  Main: "main",
  Infrastructure: "infrastructure",
  Environment: "environment",
} as const

type TBenefits = (typeof Benefits)[keyof typeof Benefits]

const BenefitsUI: Record<TBenefits, string> = {
  main: "Основное",
  infrastructure: "Инфраструктура",
  environment: "Природа",
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
  },
  infrastructure: {
    head: "Развитая инфраструктура рядом с домом",
  },
  environment: {
    head: "Природа в шаговой доступности.",
  },
}

export { Benefits, BenefitsUI, isBenefit, BenefitDescription }
export type { TBenefits }
