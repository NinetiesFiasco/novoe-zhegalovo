import type { SectionsDTO } from "./types/flats.dto"

export async function getSections(baseURL: string): Promise<SectionsDTO> {
  const url = new URL(`${baseURL}data/flats.json`, "http://localhost:3000")
  const response = await fetch(url)
  const data: SectionsDTO = await response.json()
  return data
}
