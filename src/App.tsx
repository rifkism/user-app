import { ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'

// components
import { FilterPanel, FilterPanelWrapper } from './components/FilterPanel'
import { Table } from './components/Table/Table'
import { TableHead } from './components/Table/TableHeader'
import { TableRow } from './components/Table/TableRow'
import { Label as TextInputLabel } from './components/TextInput'
import { Label as SelectInputLabel } from './components/Select/Select'

// hooks
import { useDebounce } from './hooks/useDebounce'
import { useQueryString } from './hooks/useQueryString'
import { useUsers } from './hooks/api/useUsers'

const Wrapper = styled.div`
  ${FilterPanelWrapper} {
    background: #35405a;
    padding: 32px;
  }

  ${TextInputLabel}, ${SelectInputLabel} {
    color: white;
  }
`

function App() {
  const queryParams = new URLSearchParams(window.location.search)

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

  const debouncedKeyword = useDebounce(searchKeyword, 700)

  const { error, isLoading, response } = useUsers(
    debouncedKeyword,
    genderFilter,
    page,
    sortBy,
    sortDirection
  )

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  const handleGenderFilterOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value)
  }

  const handleSortOnChange = (sortBy: string, sortDirection: string) => {
    setSortBy(sortBy)
    setSortDirection(sortDirection)
  }

  useEffect(() => {
    if (error) alert(error)
  }, [error])

  return (
    <Wrapper>
      <FilterPanel
        genderFilter={genderFilter}
        onGenderFilterChange={handleGenderFilterOnChange}
        onKeywordSearchChange={handleSearchOnChange}
        searchKeyword={searchKeyword}
        onReset={handleResetParams}
      />
      <Table
        onSort={handleSortOnChange}
        sortBy={sortBy}
        sortDirection={sortDirection}
      >
        <thead>
          <TableHead field='name' columnOrder={0}>
            Name
          </TableHead>
          <TableHead field='email' columnOrder={1}>
            Email
          </TableHead>
          <TableHead field='gender' columnOrder={2}>
            Gender
          </TableHead>
        </thead>
        <tbody>
          {response?.map(({ name, email, gender, phone }, key) => (
            <TableRow key={phone}>
              <td>{key + 1}</td>
              <td>
                {name.title} {name.first} {name.last}
              </td>
              <td>{email}</td>
              <td>{gender}</td>
            </TableRow>
          ))}
          {isLoading && (
            <td>
              <span>Loading...</span>
            </td>
          )}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default App
