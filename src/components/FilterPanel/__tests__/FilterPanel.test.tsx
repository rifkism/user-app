import { render, screen } from '@testing-library/react'

// components
import FilterPanel from '../'

test('Should render FilterPanel correctly', () => {
  render(
    <FilterPanel
      genderFilter='male'
      onGenderFilterChange={jest.fn()}
      onKeywordSearchChange={jest.fn()}
      searchKeyword=''
      onReset={jest.fn()}
      onNextPageClick={jest.fn()}
      onPreviousPageClick={jest.fn()}
    />
  )

  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  expect(screen.getByRole('combobox', { name: 'Gender' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
})
