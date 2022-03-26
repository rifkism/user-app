interface OptionProps {
  children: string
  selected?: boolean
  value: string
}

const Option = ({ children, value, selected }: OptionProps) => {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}

export { Option }
