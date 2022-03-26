import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

// components
import { TextInput } from '../'

test('Should handle onChange event', () => {
  const onChangeMock = jest.fn()

  render(
    <TextInput name='textInput' placeholder='search' onChange={onChangeMock} />
  )
  userEvent.type(screen.getByPlaceholderText('search'), 'test')

  expect(onChangeMock).toBeCalledTimes(4)
})

test('Should show placeholder correctly', () => {
  const placeholderMock = 'placeholder'

  render(<TextInput name='textInput' placeholder={placeholderMock} />)

  expect(screen.getByPlaceholderText(placeholderMock)).toBeInTheDocument()
})
