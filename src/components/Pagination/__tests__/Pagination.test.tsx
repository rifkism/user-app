import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Pagination } from '../'

test('Should render Pagination', () => {
  render(
    <Pagination onNextPageClick={jest.fn()} onPreviousPageClick={jest.fn()} />
  )

  expect(screen.getByRole('button', { name: /Previous/ })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Next/ })).toBeInTheDocument()
})

test('Should handle next and previous button on click', () => {
  const onNextPageClickMock = jest.fn()
  const onPreviousPageClickMock = jest.fn()
  render(
    <Pagination
      onNextPageClick={onNextPageClickMock}
      onPreviousPageClick={onPreviousPageClickMock}
    />
  )

  userEvent.click(screen.getByRole('button', { name: /Previous/ }))
  userEvent.click(screen.getByRole('button', { name: /Next/ }))

  expect(onNextPageClickMock).toHaveBeenCalledTimes(1)
  expect(onPreviousPageClickMock).toHaveBeenCalledTimes(1)
})
