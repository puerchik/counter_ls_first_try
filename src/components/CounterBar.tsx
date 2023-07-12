import React from "react";
import './../App.css'
import { Button } from "./Button";

type CounterBarType = {
    inc: () => void
    reset: () => void
}

export const CounterBar: React.FC<CounterBarType> = ({
    inc,
    reset
}) => {
    return (
        <div className="CounterBar__wrapper wrapper">
            <Button callback={() => inc()} func={"inc"} />
            <Button callback={() => reset()} func={"reset"} />
        </div>
    )
}