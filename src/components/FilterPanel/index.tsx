import { ChangeEvent } from 'react'
import styled from 'styled-components'

// components
import { Option, Select } from '../Select'
import { TextInput } from '../TextInput'

const FilterPanelWrapper = styled.div`
  display: flex;
  gap: 4px;
`
interface FilterPanelProps {
  onGenderFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onKeywordSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  onReset: () => void
  searchKeyword: string
}

const FilterPanel = ({
  onGenderFilterChange,
  onKeywordSearchChange,
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
      <Select name='Gender' label='Gender' onChange={onGenderFilterChange}>
        <Option value='all'>All</Option>
        <Option value='male'>Male</Option>
        <Option value='female'>Female</Option>
      </Select>
      <button onClick={onReset}>Reset</button>
    </FilterPanelWrapper>
  )
}

export { FilterPanel }
