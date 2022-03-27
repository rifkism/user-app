import { useEffect, useRef } from 'react'

const usePrevious = (value: string | number) => {
  const ref = useRef<string | number | undefined>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export { usePrevious }
