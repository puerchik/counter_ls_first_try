import React from "react";
import './../App.css'
import { Button } from "./Button";

type CounterBarType = {
    inc: () => void
    reset: () => void
    disableIncValue: boolean
    disableResetValue: boolean
}

export const CounterBar: React.FC<CounterBarType> = ({
    inc,
    reset,
    disableIncValue,
    disableResetValue
}) => {
    return (
        <div className="CounterBar__wrapper wrapper">
            <Button disableValue={disableIncValue} callback={() => inc()} func={"inc"} />
            <Button disableValue={disableResetValue} callback={() => reset()} func={"reset"} />
        </div>
    )
}