interface OptionProps {
  children: string
  value: string
}

const Option = ({ children, value }: OptionProps) => {
  return <option value={value}>{children}</option>
}

export { Option }
