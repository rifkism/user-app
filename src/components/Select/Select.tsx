import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

// components
import { Option } from './Option'
interface Options {
  label: string
  value: string
}
interface SelectProps {
  value: string
  label: string
  name: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  options: Options[]
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

const Select: FC<SelectProps> = ({ value, label, name, onChange, options }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div>
        <StyledSelect onChange={onChange} id={name} name={name} value={value}>
          {options?.map(({ label, value }) => (
            <Option value={value}>{label}</Option>
          ))}
        </StyledSelect>
      </div>
    </div>
  )
}

export { Select }
