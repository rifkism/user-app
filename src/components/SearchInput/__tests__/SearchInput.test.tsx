import React from 'react'
import { render, screen } from '@testing-library/react'

// components
import { SearchInput } from '../'

test('Should render SearchInput label correctly', () => {
  const mockProps = {
    value: '',
    onChange: jest.fn(),
  }

  render(<SearchInput {...mockProps} />)
  expect(screen.getByLabelText('Search:')).toBeInTheDocument()
})
