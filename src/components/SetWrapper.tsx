import React from "react";
import './../App.css'
import { ContentType } from "../App";
import { SetDisplay } from "./SetDisplay";
import { SetButtonBar } from "./SetButtonBar";


type SetWrapperType = {
    content: ContentType
    maxValue: number
    startValue: number
    setWrapper: (min: number, max: number) => void
    setButton: () => void
}

export const SetWrapper: React.FC<SetWrapperType> = ({
    maxValue,
    startValue,
    setWrapper,
    setButton
}) => {

    const setDisplayHandler = (min: number, max: number) => {
        setWrapper(min, max)
    }

    const changeValidHandler = (valid: boolean) => {
        console.log(valid);        
    }

    return (
        <div className="main-wrapper colorText" >
            <SetDisplay changeValid={(valid)=>changeValidHandler(valid)} setDisplay={(min, max) => setDisplayHandler(min, max)} maxValue={maxValue} startValue={startValue} />
            <SetButtonBar setButton={() => setButton()} />
        </div >
    )
}