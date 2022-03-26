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
  const [searchKeyword, setSearchKeyword] = useQueryString(
    'keyword',
    queryParams.get('keyword') || ''
  )
  const [genderFilter, setGenderFilter] = useQueryString('gender', 'all')

  const { error, isLoading, response } = useUsers(searchKeyword, genderFilter)

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  const handleGenderFilterOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value)
  }

  useEffect(() => {
    if (error) alert(error)
  }, [error])

  return (
    <div>
      <FilterPanel
        onGenderFilterChange={handleGenderFilterOnChange}
        onKeywordSearchChange={handleSearchOnChange}
        searchKeyword={searchKeyword}
      />
      <Table>
        <thead>
          <TableHead columnOrder={0}>Name</TableHead>
          <TableHead columnOrder={1}>Email</TableHead>
          <TableHead columnOrder={2}>Gender</TableHead>
        </thead>
        <tbody>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            response?.map(({ name, email, gender }) => (
              <TableRow>
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
