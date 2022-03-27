import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { TableProvider } from './useTableContext'

interface ToggleState {
  sortBy: string
  sortDirection: string
}
interface TableProps extends ToggleState {
  children: ReactNode
  onSort: (sortBy: string, sortDirection: string) => void
}

const StyledTable = styled.table`
  padding: 128px 16px 0;

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 200px;
  }
`

const Table: FC<TableProps> = ({ children, onSort, sortBy, sortDirection }) => {
  /* istanbul ignore next */
  const onToggleSort = (field: string, isSameColumn: boolean) => {
    let nextSort = ''

    if (sortDirection === 'default') {
      nextSort = 'asc'
    } else if (sortDirection === 'asc') {
      nextSort = 'desc'
    } else if (sortDirection === 'desc') {
      nextSort = 'default'
    }

    if (!isSameColumn) {
      nextSort = 'default'
    }

    onSort(field, nextSort)
  }

  const sortState = { sortBy, sortDirection }

  return (
    <TableProvider value={{ onToggleSort, sortState }}>
      <StyledTable>{children}</StyledTable>
    </TableProvider>
  )
}

export default Table
