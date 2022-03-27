import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { TableRow } from '../TableRow'

test('Should render TableRow correctly', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Column 1</td>
        </TableRow>
      </tbody>
    </table>
  )

  expect(screen.getByText('Column 1')).toBeInTheDocument()
})
