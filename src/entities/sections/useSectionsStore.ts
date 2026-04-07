import { defineStore } from "pinia"
import { ref } from "vue"
import { getSections } from "~/shared/api"
import type { SectionsDTO, SectionNames, FlatDTO } from "~/shared/api"

const FINISHED_INTERIOR_PRICE = 150000

export const useSectionsStore = defineStore("sections", () => {
  const sections = ref<SectionsDTO>({
    section1: {},
    section2: {},
    section3: {},
  })
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentFlat = ref<FlatDTO | null>(null)
  const currentSection = ref<number>(0)
  const currentFloor = ref<number>(0)

  const isFinished = computed(() => {
    return (currentFlat.value?.priceMeter ?? 0) > FINISHED_INTERIOR_PRICE
  })

  async function loadSections() {
    loading.value = true
    error.value = null

    try {
      const _sections: SectionsDTO = await getSections()
      setSections(_sections)
    } catch (e) {
      error.value = "Ошибка загрузки информации о квартирах"
    } finally {
      loading.value = false
    }
  }

  const setSections = (_sections: SectionsDTO) => {
    sections.value = _sections
    selectFirstFlat()
  }

  const availableSections = computed(() => {
    return sections.value ? (Object.keys(sections.value) as SectionNames[]) : []
  })

  const getFloors = (section: SectionNames) => {
    return Object.keys(sections.value[section])
  }

  const selectFlat = (
    _section: SectionNames,
    _floor: number,
    flat: FlatDTO,
  ) => {
    const section = sections.value[_section]
    const floor = section[_floor]

    currentSection.value =
      _section === "section1"
        ? 1
        : _section === "section2"
          ? 2
          : _section === "section3"
            ? 3
            : 0
    currentFloor.value = _floor
    currentFlat.value = flat
  }

  const selectFirstFlat = (): void => {
    let isFound = false
    for (const sectionKey in sections.value) {
      const key = sectionKey as keyof typeof sections.value
      const section = sections.value[key]

      for (const floorKey in section) {
        const flats = section[floorKey]

        if (Array.isArray(flats) && flats.length > 0) {
          if (flats[0]) {
            selectFlat(key, Number(floorKey), flats[0])
            isFound = true
            break
          }
        }
      }
      if (isFound) break
    }
  }

  return {
    sections,
    loading,
    error,
    availableSections,
    currentFlat,
    currentFloor,
    currentSection,
    isFinished,
    loadSections,
    getFloors,
    selectFlat,
    setSections,
  }
})
