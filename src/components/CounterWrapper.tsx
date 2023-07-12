import React, { useEffect, useState } from "react";
import './../App.css'
import { CounterDisplay } from "./CounterDisplay";
import { CounterBar } from "./CounterBar";


type CounterWrapperType = {
    minValue: number
    maxValue: number
}

export const CounterWrapper: React.FC<CounterWrapperType> = ({
    minValue,
    maxValue
}) => {

    let [count, setCount] = useState(minValue)
    useEffect(() => { setCount(minValue) }, [minValue])

    const incHandler = () => {
        if (count !== maxValue) {
            setCount(count + 1)
        }
    }

    const resetHandler = () => {
        setCount(minValue)
    }

    return (
        <div className="main-wrapper colorText">
            <CounterDisplay countValue={count} />
            <CounterBar inc={incHandler} reset={resetHandler} />
        </div>
    )
}