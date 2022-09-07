import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import ProductTable from "./ProductTable";

const testProducts = [
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: {
      value: 237.08,
      diff: 0
    },
    change: {
      value: 154.38,
      diff: 0
    },
    change_percent: {
      value: 0.1,
      diff: 0
    },
    dividend: {
      value: 0.46,
      diff: 0
    },
    yield: {
      value: 1.18,
      diff: 0
    },
    last_trade_time: "2021-04-30T11:53:21.000Z"
  },
  {
    ticker: "MSFT",
    exchange: "NASDAQ",
    price: {
      value: 261.46,
      diff: 0
    },
    change: {
      value: 161.45,
      diff: 0
    },
    change_percent: {
      value: 0.41,
      diff: 0
    },
    dividend: {
      value: 0.18,
      diff: 0
    },
    yield: {
      value: 0.98,
      diff: 0
    },
    last_trade_time: "2021-04-30T11:53:21.000Z"
  }
];

describe("react product row component", () => {
  it("should show nine th and one tr on table header", () => {
    const sub = jest.fn();
    const unsub = jest.fn();

    const { container } = render(
      <ProductTable
        products={testProducts}
        handleSubscribeClick={sub}
        handleUnsubscribeClick={unsub}
      />
    );

    expect(container.querySelector("thead").querySelectorAll("th").length).toBe(
      9
    );
    expect(container.querySelector("thead").querySelectorAll("tr").length).toBe(
      1
    );
  });

  it("should show two rows for two products", () => {
    const sub = jest.fn();
    const unsub = jest.fn();

    const { container } = render(
      <ProductTable
        products={testProducts}
        handleSubscribeClick={sub}
        handleUnsubscribeClick={unsub}
      />
    );

    expect(container.querySelector("tbody").querySelectorAll("tr").length).toBe(
      2
    );
  });
});
