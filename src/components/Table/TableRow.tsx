import { ReactNode } from 'react'

interface TableRowProps {
  children: ReactNode
  rowRef: any
}

const TableRow = ({ rowRef, children }: TableRowProps) => {
  return <tr ref={rowRef}>{children}</tr>
}

export { TableRow }
