import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
}

export const Label = styled.label<{ htmlFor: string }>`
  display: block;
  margin-bottom: 4px;
`

const StyledInput = styled.input`
  display: block;
  height: 32px;
  padding: 0 8px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TextInput: FC<InputProps> = ({
  label,
  name,
  onChange,
  placeholder,
  value,
  ...rest
}) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        id={name}
        name={name}
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </Wrapper>
  )
}

export { TextInput }
