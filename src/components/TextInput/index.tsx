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
  border: 1px solid #cbcbcb;
  display: block;
  height: 32px;
  padding: 0 8px;
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
    <div>
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
    </div>
  )
}

export { TextInput }
