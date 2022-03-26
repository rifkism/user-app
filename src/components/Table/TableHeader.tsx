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
  columnOrder: number
}

const TableHead = ({ columnOrder }: TableHeadProps) => {
  const { onToggleSort, sortState } = useTableContext()
  const { sort, columnIndex } = sortState

  const handleToggleSort = () => {
    onToggleSort(columnOrder, columnOrder === columnIndex)
  }

  return (
    <Wrapper>
      <div onClick={handleToggleSort}>
        <span>test {columnOrder}</span>
        {columnOrder === columnIndex &&
          (sort === 'default' ? (
            <FaSort />
          ) : sort === 'up' ? (
            <FaSortUp />
          ) : (
            <FaSortDown />
          ))}
      </div>
    </Wrapper>
  )
}

export { TableHead }
