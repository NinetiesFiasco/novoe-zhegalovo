import { defineStore } from "pinia"
import { ref } from "vue"
import { getSections } from "~/shared/api"
import type { SectionsDTO, SectionNames, FlatDTO } from "~/shared/api"

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

  async function loadSections() {
    loading.value = true
    error.value = null

    try {
      sections.value = await getSections()
    } catch (e) {
      error.value = "Ошибка загрузки информации о квартирах"
    } finally {
      loading.value = false
    }

    getFirstFlat()
  }

  const availableSections = computed(() => {
    return sections.value ? (Object.keys(sections.value) as SectionNames[]) : []
  })

  const getFloors = (section: SectionNames) => {
    return Object.keys(sections.value[section])
  }

  const getFirstFlat = (): void => {
    const section1 = sections.value.section1
    const firstFloor: number | undefined = Number(Object.keys(section1)[0])

    currentSection.value = 1
    currentFloor.value = Number(firstFloor)

    const flat: FlatDTO | null =
      firstFloor !== undefined ? (section1[firstFloor]?.[0] ?? null) : null
    if (flat) {
      currentFlat.value = flat
    }
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

  return {
    sections,
    loading,
    error,
    availableSections,
    currentFlat,
    currentFloor,
    currentSection,
    loadSections,
    getFloors,
    getFirstFlat,
    selectFlat,
  }
})
