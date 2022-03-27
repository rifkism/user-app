import { renderHook } from '@testing-library/react-hooks'
import { useUsers } from '../useUsers'

test('Should fetch users correctly', () => {
  const { result } = renderHook(() =>
    useUsers('john', 'all', '1', 'name', 'asc', false)
  )

  expect(result.current.users).toBeTruthy()
})
