import useCalculator from "./useCalculator.ts";
import styled from "styled-components";

function zero() {
    return 0;
}

function addition(x: number, y: number) {
    return x + y;
}

function subtract(x: number, y: number) {
    return x - y;
}

function multiply(x: number, y: number) {
    return x * y;
}

function divide(x: number, y: number) {
    return x / y;
}

function power(x: number, y: number) {
    let result = 1;
    for (let i = 1; i <= y; i++) {
        result *= x;
    }
    return result;
}

const CalcWrap = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const CalcInput = styled.input`
    field-sizing: content;
    min-width: 4ch;
    max-width: 20ch;

    padding: 6px;
    border: 2px solid #888;
    border-radius: 4px;

    text-align: center;

    background: transparent;
    color: rgb(223 225 229);

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none;
        border-color: #4a90e2;
    }
`;

const OpSlideBar = styled.div`
    display: flex;
    flex-direction: column;

    height: 144px; /* 3 × 48px */
    width: 64px;

    overflow-y: auto;
    scroll-snap-type: y mandatory;

    padding-block: 48px;
    box-sizing: border-box;

    scrollbar-width: none;
`;

const OpLabel = styled.label`
    flex: 0 0 48px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    scroll-snap-align: center;
    border: none;
    background: transparent;
`;

const OpRadio = styled.input`
    display: none;
`;

const ResultSpan = styled.span<{ $color: string }>`
    color: ${({$color}) => $color};
`

function Calculator() {
    const {setNum1, setNum2, setOperation, result} = useCalculator(zero);

    return (
        <CalcWrap>
            <CalcInput placeholder={"input first number"} type="number"
                       onChange={(e) => {
                           setNum1((e.target.valueAsNumber))
                       }}
            />

            <OpSlideBar>
                {/*TODO*/}
                <OpLabel>
                    <OpRadio type={"radio"}
                             name="operation"
                             onChange={(e) => {
                                 setOperation(() => addition);
                                 e.currentTarget.parentElement?.scrollIntoView({
                                     behavior: "smooth",
                                     block: "center",
                                     inline: "nearest"
                                 });
                             }}
                    />
                    +
                </OpLabel>

                <OpLabel>
                    <OpRadio type={"radio"}
                             name="operation"
                             onChange={(e) => {
                                 setOperation(() => subtract);
                                 e.currentTarget.parentElement?.scrollIntoView({
                                     behavior: "smooth",
                                     block: "center",
                                     inline: "nearest"
                                 });
                             }}
                    />
                    &minus;
                </OpLabel>

                <OpLabel>
                    <OpRadio type={"radio"}
                             name="operation"
                             onChange={(e) => {
                                 setOperation(() => multiply);
                                 e.currentTarget.parentElement?.scrollIntoView({
                                     behavior: "smooth",
                                     block: "center",
                                     inline: "nearest"
                                 });
                             }}
                    />
                    &times;
                </OpLabel>

                <OpLabel>
                    <OpRadio type={"radio"}
                             name="operation"
                             onChange={(e) => {
;                                 setOperation(() => divide)
                                 e.currentTarget.parentElement?.scrollIntoView({
                                     behavior: "smooth",
                                     block: "center",
                                     inline: "nearest"
                                 });
                             }}
                    />
                    &divide;
                </OpLabel>

                <OpLabel>
                    <OpRadio type={"radio"}
                             name="operation"
                             onChange={(e) => {
                                 setOperation(() => power);
                                 e.currentTarget.parentElement?.scrollIntoView({
                                     behavior: "smooth",
                                     block: "center",
                                     inline: "nearest"
                                 });
                             }}
                    />
                    ^
                </OpLabel>
            </OpSlideBar>

            <CalcInput placeholder={"input second number"} type="number"
                       onChange={(e) => {
                           setNum2(e.target.valueAsNumber)
                       }}
            />

            <span>=</span>
            <ResultSpan $color={(result < 0) ? "red" : "inherit"}>{result}</ResultSpan>

            {/*<button onClick={clearParam}>Clear</button>*/}
        </CalcWrap>
    )
}

export default Calculator;