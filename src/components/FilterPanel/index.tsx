import styled from 'styled-components'
import { ChangeEvent, useState } from 'react'

// components
import { Select } from '../Select'
import { TextInput } from '../TextInput'

const FilterPanelWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const FilterPanel = () => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <FilterPanelWrapper>
      <TextInput
        label='Search'
        name='search'
        placeholder='Search...'
        id='search-input'
        type='select'
        onChange={handleSearchOnChange}
        value={searchKeyword}
      />
      <Select name='Gender' label='Gender'>
        <option>All</option>
        <option>Test 1</option>
        <option>Test 2</option>
      </Select>
    </FilterPanelWrapper>
  )
}

export { FilterPanel }
