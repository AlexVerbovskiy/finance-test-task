import {
    render,
    screen
} from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductCell from "./ProductCell";

describe('react product cell component', () => {
    it('should build cell without span for values without field diff', () => {
        const {
            container
        } = render( <ProductCell field={"text"} key={"text"}/> )
        expect(container.querySelector("span")).not.toBeInTheDocument();
    });

    it('should build cell without span if field diff is zero', () => {
        const {
            container
        } = render( <ProductCell field={{value:"text", diff:0}} key={"text"}/> )
        expect(container.querySelector("span")).not.toBeInTheDocument();
    });

    it('should build cell without span if key is "last_trade_time', () => {
        const {
            container
        } = render( <ProductCell field={{value:"text", diff:0}} key={"last_trade_time"}/> )
        expect(container.querySelector("span")).not.toBeInTheDocument();
    });

    it('should build cell with green span if diff > 0', () => {
        const {
            container
        } = render( <ProductCell field={{value:23, diff:22}} key={"change"}/> )
        expect(container.querySelector("span").classList.contains("text-green-500")).toBe(true);
    });

    it('should build cell with green span if diff > 0', () => {
        const {
            container
        } = render( <ProductCell field={{value:23, diff:-22}} key={"change"}/> )
        expect(container.querySelector("span").classList.contains("text-red-500")).toBe(true);
    });
});