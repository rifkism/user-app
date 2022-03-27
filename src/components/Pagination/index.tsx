import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px 16px 0;

  button {
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
          <FaChevronRight /> Next
        </button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export { Pagination }
