import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px 16px 0;

  button {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 36px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: end;
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
      <ButtonWrapper>
        <button onClick={onPreviousPageClick}>
          <FaChevronLeft /> Previous
        </button>
      </ButtonWrapper>
      <ButtonWrapper>
        <button onClick={onNextPageClick}>
          Next
          <FaChevronRight />
        </button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export { Pagination }
