import React from "react";

interface IButtonProps{
    type:"submit" | "reset" | "button" | undefined;
    text:string;
    color?:string;
}

export default IButtonProps;