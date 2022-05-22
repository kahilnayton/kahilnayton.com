import type { RefObject } from 'react'
import { useEffect } from 'react'

const EVENT_NAME = 'click'

export const useClickOutside = (
  action: () => void,
  ref: RefObject<HTMLElement>,
  condition = true,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        condition
      ) {
        action()
      }
    }

    window?.addEventListener(EVENT_NAME, handleClick)

    return () => window.removeEventListener(EVENT_NAME, handleClick)
  })
}
