import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
}

const StyledInput = styled.input`
  border: 1px solid #cbcbcb;
  display: block;
  height: 32px;
  padding: 0 8px;
`

const TextInput: FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  value,
  ...rest
}) => {
  return (
    <StyledInput
      name={name}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  )
}

export { TextInput }
