import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

// components
import { Select } from '../'

test('Should show label correctly', () => {
  const labelMock = 'Label'

  render(
    <Select label={labelMock} name='testSelect'>
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  )

  expect(screen.getByLabelText(labelMock)).toBeInTheDocument()
})

test('Should handle onChange event', () => {
  const onChangeMock = jest.fn()

  render(
    <Select label='label' name='testSelect' onChange={onChangeMock}>
      <option value='1'>Option 1</option>
      <option value='2'>Option 2</option>
    </Select>
  )

  userEvent.selectOptions(screen.getByRole('combobox'), ['2'])

  expect((screen.getByText('Option 2') as HTMLOptionElement).selected).toBe(
    true
  )
  expect(onChangeMock).toHaveBeenCalledTimes(1)
})
