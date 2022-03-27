import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Table } from '../Table'
import { TableHead } from '../TableHeader'
import { TableRow } from '../TableRow'

test('Should render TableRow correctly', () => {
  render(
    <Table onSort={jest.fn()} sortBy='column-1' sortDirection='asc'>
      <thead>
        <TableRow>
          <TableHead field='column-1'>Column 1</TableHead>
        </TableRow>
      </thead>
    </Table>
  )

  expect(screen.getByText('Column 1')).toBeInTheDocument()
})

test('Should handle onSort event', () => {
  const onSortMock = jest.fn()

  render(
    <Table onSort={onSortMock} sortBy='column-1' sortDirection='asc'>
      <thead>
        <TableRow>
          <TableHead field='column-1'>Column 1</TableHead>
        </TableRow>
      </thead>
    </Table>
  )

  userEvent.click(screen.getByText('Column 1'))
  userEvent.click(screen.getByText('Column 1'))
  userEvent.click(screen.getByText('Column 1'))

  expect(onSortMock).toHaveBeenCalledTimes(3)
})
