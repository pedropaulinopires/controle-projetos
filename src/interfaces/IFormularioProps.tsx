import React, { FormEventHandler } from "react";
import InputFormulario from "../Utils/InputFormulario";
import SelectInput from "../Utils/SelectInput";

interface IFormularioProps {
    action:(projeto: object | undefined) => void;
    inputs: Array<InputFormulario>;
    selects?: Array<SelectInput>;
    projeto?:object;
}

export default IFormularioProps;