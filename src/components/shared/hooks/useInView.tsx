import { useEffect, useState } from 'react'

export const useInView = (
  elementsIds?: string[],
  viewportPositionTopPercentageTrigger = 50,
  viewportPositionBottomPercentageTrigger = 50,
) => {
  const [inView, setInView] = useState(-1)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || !elementsIds) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const anchorsEnteringView = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => elementsIds.indexOf(entry.target.id))

        if (anchorsEnteringView.length > 0) {
          const index = anchorsEnteringView[0]
          setInView(index)
        } else {
          const entry = entries[0]
          const rootY = entry.rootBounds?.y || 0

          if (entry && entry.boundingClientRect.y > rootY) {
            setInView((index) => index - 1)
          }
        }
      },
      {
        threshold: 0,
        rootMargin: `-${viewportPositionTopPercentageTrigger}% 0px -${viewportPositionBottomPercentageTrigger}% 0px`,
      },
    )

    elementsIds.map((anchor) => {
      const el = document.getElementById(anchor)

      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [
    elementsIds,
    viewportPositionTopPercentageTrigger,
    viewportPositionBottomPercentageTrigger,
  ])

  return inView
}
