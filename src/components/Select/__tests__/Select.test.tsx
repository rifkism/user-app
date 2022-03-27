import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

// components
import { Select } from '../'

test('Should show label correctly', () => {
  const labelMock = 'Label'
  const optionsMock = [
    {
      label: 'Option 1',
      value: '1',
    },
  ]

  render(
    <Select
      onChange={jest.fn()}
      label={labelMock}
      name='testSelect'
      options={optionsMock}
      value='1'
    />
  )

  expect(screen.getByLabelText(labelMock)).toBeInTheDocument()
})

test('Should handle onChange event', () => {
  const onChangeMock = jest.fn()
  const labelMock = 'Label'
  const optionsMock = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
  ]

  render(
    <Select
      onChange={onChangeMock}
      label={labelMock}
      name='testSelect'
      options={optionsMock}
    />
  )

  userEvent.selectOptions(screen.getByRole('combobox'), ['2'])

  expect((screen.getByText('Option 2') as HTMLOptionElement).selected).toBe(
    true
  )
  expect(onChangeMock).toHaveBeenCalledTimes(1)
})
