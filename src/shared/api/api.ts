import type { SectionsDTO } from "./types/flats.dto"
const config = useRuntimeConfig()
const baseURL = config.public.baseURL

export async function getSections(): Promise<SectionsDTO> {
  const response = await fetch(`${baseURL}data/flats.json`)
  const data: SectionsDTO = await response.json()
  return data
}
