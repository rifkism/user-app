import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px;

  button {
    height: 100%;
  }
`

interface PaginationProps {
  onNextPageClick: () => void
  onPreviousPageClick: () => void
}

const Pagination = ({
  onNextPageClick,
  onPreviousPageClick,
}: PaginationProps) => {
  return (
    <Wrapper>
      <button onClick={onPreviousPageClick}>
        <FaChevronLeft /> Previous
      </button>
      <button onClick={onNextPageClick}>
        <FaChevronRight /> Next
      </button>
    </Wrapper>
  )
}

export { Pagination }
