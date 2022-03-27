import { lazy, Suspense, useEffect } from 'react'
import styled from 'styled-components'

// components
import { FilterPanelWrapper } from './components/FilterPanel'
import { TableHead } from './components/Table/TableHeader'
import { TableRow } from './components/Table/TableRow'
import { Label as TextInputLabel } from './components/TextInput'
import { Label as SelectInputLabel } from './components/Select/Select'

// hooks
import { useDebounce } from './hooks/useDebounce'
import { useFilterPanel } from './hooks/useFilterPanel'
import { useUsers } from './hooks/api/useUsers'

// lazy loaded components
const FilterPanel = lazy(() => import('./components/FilterPanel'))
const Table = lazy(() => import('./components/Table/Table'))

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

  const {
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
  } = useFilterPanel(queryParams)

  const debouncedKeyword = useDebounce(searchKeyword, 700)
  const isNewKeywordSearch = debouncedKeyword !== searchKeyword

  useEffect(() => {
    if (isNewKeywordSearch) {
      setPage('1')
    }
  }, [isNewKeywordSearch, setPage])

  const { error, isLoading, users } = useUsers(
    debouncedKeyword,
    genderFilter,
    page,
    sortBy,
    sortDirection,
    isNewKeywordSearch
  )

  useEffect(() => {
    /* istanbul ignore next */
    if (error) alert(error)
  }, [error])

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterPanel
          genderFilter={genderFilter}
          onGenderFilterChange={handleGenderFilterOnChange}
          onKeywordSearchChange={handleSearchOnChange}
          searchKeyword={searchKeyword}
          onReset={handleResetParams}
          onNextPageClick={handleNextPageClick}
          onPreviousPageClick={handlePreviousPageClick}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Table
          onSort={handleSortOnChange}
          sortBy={sortBy}
          sortDirection={sortDirection}
        >
          <thead>
            <TableRow>
              <TableHead field='name'>Name</TableHead>
              <TableHead field='email'>Email</TableHead>
              <TableHead field='gender'>Gender</TableHead>
              <TableHead field='age'>Age</TableHead>
              <TableHead field='city'>City</TableHead>
              <TableHead field='state'>State</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {!isLoading &&
              users?.map(({ name, email, gender, phone, dob, location }) => (
                <TableRow key={phone}>
                  <td>
                    {name.title} {name.first} {name.last}
                  </td>
                  <td>{email}</td>
                  <td>{gender}</td>
                  <td>{dob.age}</td>
                  <td>{location.city}</td>
                  <td>{location.state}</td>
                </TableRow>
              ))}
            {isLoading && (
              <TableRow>
                <td>Loading...</td>
              </TableRow>
            )}
          </tbody>
        </Table>
      </Suspense>
    </Wrapper>
  )
}

export default App
