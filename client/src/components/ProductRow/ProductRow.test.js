import {
  render,
} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import ProductRow from "./ProductRow";

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

describe("react product row component", () => {
      it("should show nine td and one tr", () => {

            const sub = jest.fn();
            const unsub = jest.fn();

            const {
              container
            } = render( < ProductRow product = {
                testProduct
              }
              handleSubscribeClick = {
                sub
              }
              handleUnsubscribeClick = {
                unsub
              }
              /> );

              expect(container.querySelectorAll("td").length).toBe(9); expect(container.querySelectorAll("tr").length).toBe(1);
            });

          it("should show button to start and hide stop by default and if user unsubscribe", () => {

              const sub = jest.fn();
              const unsub = jest.fn();

              const {
                container,
                getByText
              } = render( < ProductRow product = {
                  testProduct
                }
                handleSubscribeClick = {
                  sub
                }
                handleUnsubscribeClick = {
                  unsub
                }
                /> );

                expect(container.querySelector(".start")).toBeInTheDocument(); expect(container.querySelector(".stop")).not.toBeInTheDocument();
              });

            it("should show button to stop and hide to start if user subscribed on tracker", () => {

                const sub = jest.fn();
                const unsub = jest.fn();
                // Cache original functionality
                const realUseState = React.useState

                // Stub the initial state
                const stubInitialState = ['stub data']

                // Mock useState before rendering your component
                jest
                  .spyOn(React, 'useState')
                  .mockImplementationOnce(() => realUseState(stubInitialState))

                const {
                  container,
                  getByText
                } = render( < ProductRow product = {
                    testProduct
                  }
                  handleSubscribeClick = {
                    sub
                  }
                  handleUnsubscribeClick = {
                    unsub
                  }
                  /> );

                  expect(container.querySelector(".start")).not.toBeInTheDocument(); expect(container.querySelector(".stop")).toBeInTheDocument();
                });
            });