import { ChangeEvent, useEffect } from 'react'

// components
import { FilterPanel } from './components/FilterPanel'
import { Table } from './components/Table/Table'
import { TableHead } from './components/Table/TableHeader'
import { TableRow } from './components/Table/TableRow'

// hooks
import { useQueryString } from './hooks/useQueryString'
import { useUsers } from './hooks/api/useUsers'

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

  const { error, isLoading, response } = useUsers(
    searchKeyword,
    genderFilter,
    sortBy,
    sortDirection
  )

  const handleResetParams = () => {
    setSearchKeyword('')
    setGenderFilter('all')
    setSortBy('name')
    setSortDirection('')
  }

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
    <div>
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
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            response?.map(({ name, email, gender, phone }) => (
              <TableRow key={phone}>
                <td>
                  {name.title} {name.first} {name.last}
                </td>
                <td>{email}</td>
                <td>{gender}</td>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default App
