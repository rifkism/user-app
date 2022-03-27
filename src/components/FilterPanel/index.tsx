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

  div.reset-button {
    display: flex;
    flex-direction: column;
    justify-content: end;

    > button {
      cursor: pointer;
      height: 36px;
    }
  }
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
        type='input'
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
      <div className='reset-button'>
        <button name='reset' onClick={onReset}>
          Reset
        </button>
      </div>
      <Pagination
        onNextPageClick={onNextPageClick}
        onPreviousPageClick={onPreviousPageClick}
      />
    </FilterPanelWrapper>
  )
}

export { FilterPanel }
