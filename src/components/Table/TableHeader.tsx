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
  field: string
}

const TableHead = ({ children, field }: TableHeadProps) => {
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
          (sortDirection === 'default' || sortDirection === '' ? (
            <FaSort data-testid='sortDefault' />
          ) : sortDirection === 'asc' ? (
            <FaSortUp data-testid='asc' />
          ) : (
            <FaSortDown data-testid='desc' />
          ))}
      </div>
    </Wrapper>
  )
}

export { TableHead }
