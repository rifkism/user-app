import { ChangeEvent, FC, ReactNode } from 'react'
import styled from 'styled-components'

interface InputProps {
  children: ReactNode
  label: string
  name: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

const StyledSelect = styled.select<{
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
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
