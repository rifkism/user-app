import { render, screen } from '@testing-library/react'

import Table from '../Table'
import { TableHead } from '../TableHeader'
import { TableRow } from '../TableRow'

test('Should render TableRow correctly', () => {
  const handleSortMock = jest.fn()
  render(
    <Table onSort={handleSortMock} sortDirection='asc' sortBy='name'>
      <tbody>
        <TableRow>
          <TableHead field='name'>Name</TableHead>
          <TableHead field='email'>Email</TableHead>
          <TableHead field='gender'>Gender</TableHead>
        </TableRow>
      </tbody>
    </Table>
  )

  expect(screen.getByTestId('asc')).toBeInTheDocument()
})
