import React from "react";
import './../App.css'

type ButtonType = {
    func: 'set' | 'inc' | 'reset'
    callback: () => void
}

export const Button: React.FC<ButtonType> = ({
    func,
    callback
}) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler} className="button">{func}</button>
    )
}