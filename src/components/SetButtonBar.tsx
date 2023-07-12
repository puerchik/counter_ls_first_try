import React from "react";
import './../App.css'
import { Button } from "./Button";

type SetButtonBarType = {
    setButton: () => void
}

export const SetButtonBar: React.FC<SetButtonBarType> = ({
    setButton
}) => {

    return (
        <div className="SetButton__wrapper">
            <Button callback={()=>setButton()} func={'set'} />
        </div>
    )
}