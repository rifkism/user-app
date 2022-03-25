import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/icons/search.png'

const Label = styled.label<{ for: string }>`
  display: block;
  margin-bottom: 4px;
`

const Button = styled.button`
  background: 'blue';
`

const Input = styled.input`
  border: 1px solid #cbcbcb;
  display: block;
  padding: 8px;
`

const InputWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  text-align: left;
  width: fit-content;
`
interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <Wrapper>
      <Label for='search'>Search:</Label>
      <InputWrapper>
        <Input
          id='search'
          type='text'
          name='search'
          onChange={onChange}
          placeholder='Search...'
          value={value}
        />
        <Button>
          <img src={searchIcon} alt='search' />
        </Button>
      </InputWrapper>
    </Wrapper>
  )
}

export { SearchInput }
