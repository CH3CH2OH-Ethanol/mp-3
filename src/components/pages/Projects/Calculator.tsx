import useCalculator from "./useCalculator.ts";
import styled from "styled-components";

function zero() {
    return 0;
}

function addition(x:number, y:number){
    return x + y;
}

function subtract(x:number, y:number){
    return x - y;
}

function multiply(x:number, y:number){
    return x * y;
}

function divide(x:number, y:number){
    return x / y;
}

function power(x:number, y:number){
    let result = 1;
    for (let i = 1; i <= y; i++) {
        result *= x;
    }
    return result;
}

const CalcInput = styled.input`
    
`;

const OpLabel = styled.label`
    
`;

function Calculator() {
    const {setNum1, setNum2, setOperation, result} = useCalculator(zero);

    return (
        <div>
            <CalcInput type="number"
                   onChange={(e)=>{
                       setNum1((e.target.valueAsNumber))
                   }}
            />

            <div className="calculator-buttons">
                {/*TODO*/}
                <OpLabel>
                    <input type={"radio"} name = "operation" onChange={()=>setOperation(()=>addition)}/>
                    +
                </OpLabel>

                <OpLabel>
                    <input type={"radio"} name = "operation" onChange={()=>setOperation(()=>subtract)}/>
                    -
                </OpLabel>

                <OpLabel>
                    <input type={"radio"} name = "operation" onChange={()=>setOperation(()=>multiply)}/>
                    &times;
                </OpLabel>

                <OpLabel>
                    <input type={"radio"} name = "operation" onChange={()=>setOperation(()=>divide)}/>
                    &divide;
                </OpLabel>

                <OpLabel>
                    <input type={"radio"} name = "operation" onChange={()=>setOperation(()=>power)}/>
                    ^
                </OpLabel>
            </div>

            <CalcInput type="number"
                   onChange={(e)=>{
                       setNum2(e.target.valueAsNumber)
                   }}
            />

            <span>=</span>
            <span>{result}</span>

            {/*<button onClick={clearParam}>Clear</button>*/}
        </div>
    )
}

export default Calculator;