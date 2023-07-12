import React, { useEffect, useState } from "react";
import './../App.css';
import { ChangeEvent } from "react";

type InputType = {
    labelId: "max" | "start"
    value: number
    setInput: (value: number) => void
}

export const Input: React.FC<InputType> = ({
    labelId,
    value,
    setInput
}) => {

    let [changeValue, setchangeValue] = useState(value)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setchangeValue(Number(e.currentTarget.value))
    }

    useEffect(() => { setInput(changeValue) }, [changeValue]);

    return (
        <>
            <input onChange={onChangeHandler} value={changeValue} className="input" id={labelId} type="number" />
        </>
    )
}