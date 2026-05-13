declare global {
  interface Window {
    ym?: (...args: any[]) => void & {
      a?: any[]
      l?: number
    }
  }
}

const YANDEX_METRIKA = process.env.YANDEX_METRIKA

export const useMetrika = () => {
  const initMetrika = () => {
    useHead({
      script: [
        {
          src: "https://mc.yandex.ru/metrika/tag.js",
          async: true,
        },
        {
          innerHTML: `
            window.ym = window.ym || function () {
              (window.ym.a = window.ym.a || []).push(arguments)
            };

            window.ym.l = Date.now();

            ym(${YANDEX_METRIKA}, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          innerHTML: `
            <div>
              <img
                src="https://mc.yandex.ru/watch/${YANDEX_METRIKA}"
                style="position:absolute; left:-9999px;"
                alt=""
              />
            </div>
          `,
        },
      ],
    })
  }

  const hit = (url: string) => {
    if (process.client && window.ym) {
      window.ym(YANDEX_METRIKA, "hit", url)
    }
  }

  const reachGoal = (goal: string, params?: Record<string, any>) => {
    if (process.client && window.ym) {
      window.ym(YANDEX_METRIKA, "reachGoal", goal, params)
    }
  }

  return {
    initMetrika,
    hit,
    reachGoal,
  }
}
