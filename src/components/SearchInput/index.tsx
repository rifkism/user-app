import styled from 'styled-components'

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

const Input = styled.input`
  border: 1px solid #cbcbcb;
  display: block;
  padding: 8px;
`

const Wrapper = styled.div`
  text-align: left;
  width: fit-content;
`

const SearchInput = () => {
  return (
    <Wrapper>
      <Label>Search:</Label>
      <Input type='text' name='search' placeholder='Search...' />
    </Wrapper>
  )
}

export { SearchInput }
