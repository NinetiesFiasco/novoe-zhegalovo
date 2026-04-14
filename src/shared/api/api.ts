import type { SectionsDTO } from "./types/flats.dto"

export async function getSections(): Promise<SectionsDTO> {
  const url = new URL(`/data/flats.json`, window.location.origin)
  const response = await fetch(url)
  const data: SectionsDTO = await response.json()
  return data
}

type MailAnswer = {
  status: number
  message: string
  info?: any
  error?: any
}

export async function getCall(name: string, phone: string): Promise<boolean> {
  const data = await $fetch<MailAnswer>("api/mail", {
    method: "POST",
    body: JSON.stringify({
      name,
      phone,
    }),
  })

  return data.status === 1
}
