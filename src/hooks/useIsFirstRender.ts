import { useRef } from 'react'

const useIsFirstRender = (): boolean => {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  /* istanbul ignore next */
  return isFirst.current
}

export { useIsFirstRender }
