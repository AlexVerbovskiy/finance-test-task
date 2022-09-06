import {
  render
} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

describe('renders a message', () => {

  const useSelectorMock = jest.spyOn(reduxHooks, 'useSelector')
  const useDispatchMock = jest.spyOn(reduxHooks, 'useDispatch')


  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })

  it("should return loading block if redux.isLoading", () => {

    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    useSelectorMock.mockReturnValue({
      main: {
        isLoading: true,
        isAuth: false
      }
    })

    const component = render( < App/> )
    expect(component.queryByText(/Loading/)).toBeInTheDocument();
    expect(component.queryByText(/Alex Verbovskiy/)).not.toBeInTheDocument();
    expect(component.queryByText(/Error/)).not.toBeInTheDocument()
  })

  it("should return loading block if !redux.isLoading and redux.isAuth", () => {

    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    useSelectorMock.mockReturnValue({
      main: {
        isLoading: false,
        isAuth: true
      },
      products: {
        gettedProducts: [],
        products: [],
      }
    })

    const component = render( < App/> )
    expect(component.queryByText(/Loading/)).not.toBeInTheDocument();
    expect(component.queryByText(/Alex Verbovskiy/)).toBeInTheDocument();
    expect(component.queryByText(/Error/)).not.toBeInTheDocument()
  })

  it("should return error message if loading will finish and field auth not true", () => {

    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    useSelectorMock.mockReturnValue({
      main: {
        isLoading: false,
        isAuth: false
      }
    })

    const component = render( < App/> )
    expect(component.queryByText(/Loading/)).not.toBeInTheDocument();
    expect(component.queryByText(/Alex Verbovskiy/)).not.toBeInTheDocument();
    expect(component.queryByText(/Error/)).toBeInTheDocument()
  })

 
})