import {useState} from "react";

function useCalculator(op:(x: number, y: number) => number) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState(()=>op);

    const result = operation(num1, num2);

    return {
        setNum1,
        setNum2,
        setOperation,
        result
    };
}

export default useCalculator;