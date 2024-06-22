import React from "react";
import InputFormulario from "../Utils/InputFormulario";
import SelectInput from "../Utils/SelectInput";

interface IFormularioProps {
    action: string;
    inputs: Array<InputFormulario>;
    selects?: Array<SelectInput>
}

export default IFormularioProps;