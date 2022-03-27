import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { useUsers } from './hooks/api/useUsers'

jest.mock('./hooks/api/useUsers', () => {
  return {
    useUsers: jest.fn(),
  }
})

jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key)

test('Should render user data', () => {
  ;(useUsers as jest.Mock).mockImplementation(() => ({
    error: null,
    isLoading: false,
    users: [
      {
        name: { title: 'Mr.', first: 'John', last: 'Doe' },
        email: 'john.doe@example.com',
        gender: 'male',
        phone: '12345',
        dob: {
          age: 30,
        },
        location: {
          city: 'Los Angeles',
          state: 'California',
        },
      },
    ],
  }))
  render(<App />)
})

test('Should handle loading state', () => {
  ;(useUsers as jest.Mock).mockImplementation(() => ({
    error: null,
    isLoading: true,
    users: [],
  }))
  render(<App />)
})
