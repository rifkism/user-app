import { ReactNode } from 'react'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import styled from 'styled-components'

// contexts
import { useTableContext } from '../../components/Table/useTableContext'

const Wrapper = styled.th`
  alignitems: center;
  justifycontent: space-between;
  minwidth: 50px;
  cursor: pointer;
`

interface TableHeadProps {
  children: ReactNode
  columnOrder: number
  field: string
}

const TableHead = ({ children, columnOrder, field }: TableHeadProps) => {
  const { onToggleSort, sortState } = useTableContext()
  const { sortDirection } = sortState

  const handleToggleSort = () => {
    onToggleSort(field, field === sortState.sortBy)
  }

  return (
    <Wrapper>
      <div onClick={handleToggleSort}>
        {children}
        {field === sortState.sortBy &&
          (sortDirection === 'default' ? (
            <FaSort />
          ) : sortDirection === 'up' ? (
            <FaSortUp />
          ) : (
            <FaSortDown />
          ))}
      </div>
    </Wrapper>
  )
}

export { TableHead }
