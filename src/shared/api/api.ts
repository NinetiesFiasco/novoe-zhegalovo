import type { SectionsDTO } from "./types/flats.dto"

export async function getSections(): Promise<SectionsDTO> {
  const response = await fetch("/data/flats.json")
  const data: SectionsDTO = await response.json()
  return data
}
