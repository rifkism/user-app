import { ChangeEvent } from 'react'
import styled from 'styled-components'

// components
import { Pagination } from '../Pagination'
import { Select } from '../Select'
import { TextInput } from '../TextInput'

export const FilterPanelWrapper = styled.div`
  background: white;
  display: flex;
  gap: 4px;
  position: fixed;
  width: 100%;
`
interface FilterPanelProps {
  genderFilter: string
  onGenderFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onKeywordSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  onNextPageClick: () => void
  onPreviousPageClick: () => void
  onReset: () => void
  searchKeyword: string
}

const genderOptions = [
  { label: 'All', value: 'All' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

const FilterPanel = ({
  genderFilter,
  onGenderFilterChange,
  onKeywordSearchChange,
  onNextPageClick,
  onPreviousPageClick,
  onReset,
  searchKeyword,
}: FilterPanelProps) => {
  return (
    <FilterPanelWrapper>
      <TextInput
        label='Search'
        name='search'
        placeholder='Search...'
        id='search-input'
        type='select'
        onChange={onKeywordSearchChange}
        value={searchKeyword}
      />
      <Select
        name='Gender'
        label='Gender'
        onChange={onGenderFilterChange}
        options={genderOptions}
        value={genderFilter}
      />
      <button onClick={onReset}>Reset</button>
      <Pagination
        onNextPageClick={onNextPageClick}
        onPreviousPageClick={onPreviousPageClick}
      />
    </FilterPanelWrapper>
  )
}

export { FilterPanel }
