import React from "react";
import './../App.css'

type ButtonType = {
    func: 'set' | 'inc' | 'reset'
    callback: () => void
    disableValue: boolean
}

export const Button: React.FC<ButtonType> = ({
    func,
    callback,
    disableValue
}) => {

    const onClickHandler = () => {
        callback()
    }

    let disableStatus = disableValue

    return (
        <button disabled={disableStatus} onClick={onClickHandler} className="button">{func}</button>
    )
}