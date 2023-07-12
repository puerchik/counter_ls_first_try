import React, { useState } from "react";
import './../App.css'

type CounterDisplayType = {
    countValue: number
}

export const CounterDisplay: React.FC<CounterDisplayType> = ({
    countValue
}) => {

    return (
        <div className="scoreboard__wrapper displayWrapper">
            <span className="scoreboard__value">{countValue}</span>
        </div>

    )
}