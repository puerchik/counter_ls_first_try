import React from "react";
import './../App.css'
import { Button } from "./Button";

type SetButtonBarType = {
    setButton: () => void
    disableValue: boolean
}

export const SetButtonBar: React.FC<SetButtonBarType> = ({
    setButton,
    disableValue
}) => {

    console.log(disableValue);
    

    return (
        <div className="SetButton__wrapper">
            <Button disableValue={!disableValue} callback={() => setButton()} func={'set'} />
        </div>
    )
}