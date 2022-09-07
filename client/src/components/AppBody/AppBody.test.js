import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppBody from "./AppBody";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

const testProduct = {
  ticker: "GOOGL",
  exchange: "NASDAQ",
  price: {
    value: 240,
    diff: 1
  },
  change: {
    value: 240,
    diff: 35
  },
  change_percent: {
    value: 0.2,
    diff: 50
  },
  dividend: {
    value: 0.4,
    diff: -15
  },
  yield: {
    value: 1.4,
    diff: 15
  },
  last_trade_time: "2021-04-30T11:53:21.000Z"
};

describe("renders a AppBody", () => {
  const useSelectorMock = jest.spyOn(reduxHooks, "useSelector");
  const useDispatchMock = jest.spyOn(reduxHooks, "useDispatch");

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should build button to unsubscribe main timer if user subscribed on this event", () => {
    useSelectorMock.mockReturnValue({
      products: {
        gettedProducts: [],
        products: []
      }
    });

    React.useState = jest.fn().mockReturnValue([true, () => {}]);

    const component = render(<AppBody />);
    expect(component.queryByText("Unsubscribe")).toBeInTheDocument();
    expect(component.queryByText("Subscribe")).not.toBeInTheDocument();
  });

  it("should build button to unsubscribe main timer if user subscribed on this event", () => {
    useSelectorMock.mockReturnValue({
      products: {
        gettedProducts: [],
        products: []
      }
    });

    React.useState = jest.fn().mockReturnValue([false, () => {}]);

    const component = render(<AppBody />);
    expect(component.queryByText("Unsubscribe")).not.toBeInTheDocument();
    expect(component.queryByText("Subscribe")).toBeInTheDocument();
  });

  it("should build product table if products length more than 0", () => {
    useSelectorMock.mockReturnValue({
      products: {
        gettedProducts: [],
        products: [testProduct, testProduct, testProduct]
      }
    });

    React.useState = jest.fn().mockReturnValue([true, () => {}]);

    const component = render(<AppBody />);
    expect(component.queryByRole("table")).toBeInTheDocument();
  });

  it("shouldn't build product table if products length more than 0", () => {
    useSelectorMock.mockReturnValue({
      products: {
        gettedProducts: [],
        products: []
      }
    });

    React.useState = jest.fn().mockReturnValue([true, () => {}]);

    const component = render(<AppBody />);
    expect(component.queryByRole("table")).not.toBeInTheDocument();
  });
});
