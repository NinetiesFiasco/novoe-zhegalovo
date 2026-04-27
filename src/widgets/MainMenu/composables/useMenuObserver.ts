import { onMounted } from "vue"

export function useMenuObserver() {
  onMounted(() => {
    const links = document.querySelectorAll(".nav__link")
    const sections = document.querySelectorAll(".spy-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"))

            const id = entry.target.id
            const link = document.querySelector(`.nav__link[data-link="${id}"]`)

            link?.classList.add("active")
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    )

    sections.forEach((s) => observer.observe(s))
  })
}
