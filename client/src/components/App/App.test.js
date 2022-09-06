import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";

test('renders a message', () => {
  const {asFragment, getByText} = render(<App/>)
  expect(getByText(/Finance/)).toBeInTheDocument()
})