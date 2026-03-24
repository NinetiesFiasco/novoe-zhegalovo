export type FlatDTO = {
  number: number
  totalArea: number
  livingArea: number
  priceMeter: number
  priceTotal: number
  rooms: number
  plan: string
  position: number
}

type NumberKeyedArray<T> = {
  [key: number]: T[]
}

export type SectionNames = "section1" | "section2" | "section3"

type SectionsMap = {
  [key in SectionNames]: NumberKeyedArray<FlatDTO>
}

export type SectionsDTO = SectionsMap
