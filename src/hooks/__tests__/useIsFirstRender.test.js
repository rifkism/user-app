import { renderHook, act } from '@testing-library/react-hooks'
import { useIsFirstRender } from '../useIsFirstRender'

test('Should handle first render correctly', () => {
  const { result } = renderHook(() => useIsFirstRender())

  expect(result.current).toBe(true)
})
