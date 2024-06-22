import React from "react";
import IInputProps from "../interfaces/IInputProps";
import TiposProjetos from "./TiposProjetos";
import ISelectInputProps from "../interfaces/ISelectInputProps";

class SelectInput implements ISelectInputProps {

    textDefault: string;
    name: string;
    id: string;
    required: boolean;
    values: Array<TiposProjetos>;
    disabled: boolean;

    public constructor(
        textDefault: string,
        name: string,
        id: string,
        required: boolean,
        values: Array<TiposProjetos>,
        disabled: boolean) {

        this.textDefault = textDefault;
        this.name = name;
        this.id = id;
        this.required = required;
        this.values = values;
        this.disabled = disabled;
    }
}

export default SelectInput;