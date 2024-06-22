import React from "react";
import IInputProps from "../interfaces/IInputProps";

class InputFormulario implements IInputProps {
    
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    value: string | number | readonly string[] | undefined;
    disabled: boolean;

    public constructor(type: string,
                       placeholder: string,
                       name:string,
                       id: string,
                       required: boolean,
                       value:  string | number | readonly string[] | undefined,
                       disabled: boolean) {

        this.type = type;
        this.placeholder = placeholder;
        this.name = name;
        this.id = id;
        this.required = required;
        this.value = value;
        this.disabled = disabled;
    }
}

export default InputFormulario;