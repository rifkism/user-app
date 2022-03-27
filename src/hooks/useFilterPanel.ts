import { useQueryString } from './useQueryString'
import { ChangeEvent } from 'react'

const useFilterPanel = (queryParams: URLSearchParams) => {
  // initialize state for params
  const [searchKeyword, setSearchKeyword] = useQueryString(
    'keyword',
    queryParams.get('keyword') || ''
  )
  const [genderFilter, setGenderFilter] = useQueryString('gender', 'all')
  const [sortBy, setSortBy] = useQueryString('sortBy', 'name')
  const [sortDirection, setSortDirection] = useQueryString('sortDirection', '')
  const [page, setPage] = useQueryString('page', '1')

  const handleResetParams = () => {
    setSearchKeyword('')
    setGenderFilter('all')
    setPage('1')
    setSortBy('name')
    setSortDirection('')
  }

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  const handleGenderFilterOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value)
    setPage('1')
  }

  const handleSortOnChange = (sortBy: string, sortDirection: string) => {
    setPage('1')
    setSortBy(sortBy)
    setSortDirection(sortDirection)
  }

  const handleNextPageClick = () => {
    setPage((parseInt(page) + 1).toString())
  }

  const handlePreviousPageClick = () => {
    /* istanbul ignore next */
    if (page === '1') return
    setPage((parseInt(page) - 1).toString())
  }

  return {
    searchKeyword,
    genderFilter,
    page,
    sortBy,
    sortDirection,
    setPage,
    handleGenderFilterOnChange,
    handleSearchOnChange,
    handleResetParams,
    handleNextPageClick,
    handlePreviousPageClick,
    handleSortOnChange,
  }
}

export { useFilterPanel }
