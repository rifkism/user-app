import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

// components
import { TextInput } from '../'

test('Should show placeholder correctly', () => {
  const placeholderMock = 'placeholder'

  render(
    <TextInput label='label' name='textInput' placeholder={placeholderMock} />
  )

  expect(screen.getByPlaceholderText(placeholderMock)).toBeInTheDocument()
})

test('Should handle onChange event', () => {
  const onChangeMock = jest.fn()
  const placeholderMock = 'placeholder'

  render(
    <TextInput
      label='label'
      name='textInput'
      placeholder={placeholderMock}
      onChange={onChangeMock}
    />
  )
  userEvent.type(screen.getByPlaceholderText(placeholderMock), 'test')

  expect(onChangeMock).toBeCalledTimes(4)
})
