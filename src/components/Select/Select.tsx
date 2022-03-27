import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

// components
import { Option } from './Option'
interface Options {
  label: string
  value: string
}
interface SelectProps {
  value?: string
  label: string
  name: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  options: Options[]
}

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

const StyledSelect = styled.select<{
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}>`
  cursor: pointer;
  height: 36px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Select: FC<SelectProps> = ({ value, label, name, onChange, options }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <div>
        <StyledSelect onChange={onChange} id={name} name={name} value={value}>
          {options?.map(({ label, value }, key) => (
            <Option key={key} value={value}>
              {label}
            </Option>
          ))}
        </StyledSelect>
      </div>
    </Wrapper>
  )
}

export { Select }
