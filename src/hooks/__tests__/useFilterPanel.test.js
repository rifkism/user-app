import { renderHook, act } from '@testing-library/react-hooks'
import { useFilterPanel } from '../useFilterPanel'

test('Should reset parameters correctly', () => {
  const { result } = renderHook(() => useFilterPanel(new URLSearchParams()))
  act(() => result.current.handleResetParams())

  expect(result.current.searchKeyword).toBe('')
  expect(result.current.genderFilter).toBe('all')
  expect(result.current.page).toBe('1')
  expect(result.current.sortBy).toBe('name')
  expect(result.current.sortDirection).toBe('')
})

test('Should handle search on change', () => {
  const { result } = renderHook(() => useFilterPanel(new URLSearchParams()))
  const searchValue = 'value'

  act(() =>
    result.current.handleSearchOnChange({ target: { value: searchValue } })
  )
  expect(result.current.searchKeyword).toBe(searchValue)
})

test('Should handle handle gender filter on change', () => {
  const { result } = renderHook(() => useFilterPanel(new URLSearchParams()))
  const genderValue = 'all'

  act(() => {
    result.current.handleGenderFilterOnChange({
      target: { value: genderValue },
    })
  })

  expect(result.current.genderFilter).toBe(genderValue)
})

test('Should handle sort on change', () => {
  const { result } = renderHook(() => useFilterPanel(new URLSearchParams()))
  const sortBy = 'name'
  const sortDirection = 'asc'

  act(() => {
    result.current.handleSortOnChange(sortBy, sortDirection)
  })

  expect(result.current.sortBy).toBe(sortBy)
  expect(result.current.sortDirection).toBe(sortDirection)
})

test('Should handle pagination buttons on click', () => {
  const { result } = renderHook(() => useFilterPanel(new URLSearchParams()))
  act(() => {
    result.current.handleNextPageClick()
  })

  expect(result.current.page).toBe('2')

  act(() => {
    result.current.handlePreviousPageClick()
  })

  expect(result.current.page).toBe('1')
})
