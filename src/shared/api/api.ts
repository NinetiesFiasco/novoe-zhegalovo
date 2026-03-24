import type { SectionsDTO } from "./types/flats.dto"

export async function getSections(baseURL: string): Promise<SectionsDTO> {
  const response = await fetch(`${baseURL}data/flats.json`)
  const data: SectionsDTO = await response.json()
  return data
}
