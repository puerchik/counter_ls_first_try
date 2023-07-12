import React, { useEffect, useState } from "react";
import './../App.css'
import { Input } from "./Input";
import { ContentType } from "../App";

type SetDisplayType = {
    maxValue: number
    startValue: number
    setDisplay: (min: number, max: number) => void
}

export const SetDisplay: React.FC<SetDisplayType> = ({
    maxValue,
    startValue,
    setDisplay
}) => {

    let [min, setMin] = useState(startValue)
    let [max, setMax] = useState(maxValue)

    const setInputHandler = (value: number, labelId: string) => {
        labelId === "max" ? setMax(value) : setMin(value)
    }

    useEffect(() => { setDisplay(min, max) }, [min, max]);

    return (
        <div className="displayWrapper">
            <div className="wrapper setDisplay">
                <label className="setDisplay__label" htmlFor="max">max value:</label>
                <Input setInput={(value) => setInputHandler(value, "max")} value={maxValue} labelId="max" />
            </div>
            <div className="wrapper setDisplay">
                <label className="setDisplay__label" htmlFor="start">start value:</label>
                <Input setInput={(value) => setInputHandler(value, "start")} value={startValue} labelId="start" />
            </div>
        </div>
    )
}