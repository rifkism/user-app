import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { TableProvider } from './useTableContext'

interface TableProps {
  children: ReactNode
}

interface ToggleState {
  columnIndex: number
  sort: string
}

const StyledTable = styled.table`
  border: 1px solid grey;
  padding: 4px;

  th,
  td {
    padding: 8px;
  }
`

const Table: FC<TableProps> = ({ children }) => {
  const [sortState, setToggleSort] = useState<ToggleState>({
    columnIndex: 0,
    sort: 'default',
  })

  const onToggleSort = (column: number, isSameColumn: boolean) => {
    const { sort } = sortState
    let nextSort = ''

    if (sort === 'default') {
      nextSort = 'up'
    } else if (sort === 'up') {
      nextSort = 'down'
    } else if (sort === 'down') {
      nextSort = 'default'
    }

    if (!isSameColumn) {
      nextSort = 'default'
    }

    setToggleSort({ columnIndex: column, sort: nextSort })
  }

  return (
    <TableProvider value={{ onToggleSort, sortState }}>
      <StyledTable>{children}</StyledTable>
    </TableProvider>
  )
}

export { Table }
