import type { SectionsDTO } from "./types/flats.dto"

export async function getSections(): Promise<SectionsDTO> {
  const url = new URL(`data/flats.json`, "http://localhost:3000")
  const response = await fetch(url)
  const data: SectionsDTO = await response.json()
  return data
}
