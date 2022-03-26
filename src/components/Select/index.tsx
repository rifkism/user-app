import React, {
  FC,
  ReactNode,
  SelectHTMLAttributes,
} from 'react'
import styled from 'styled-components'

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
  label: string
  name: string
  onChange?: () => void
}

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

const StyledSelect = styled.select<{
  onChange?: () => void
}>`
  height: 34px;
`

const Select: FC<InputProps> = ({ children, label, name, onChange }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div>
        <StyledSelect onChange={onChange} id={name} name={name}>
          {children}
        </StyledSelect>
      </div>
    </div>
  )
}

export { Select }
