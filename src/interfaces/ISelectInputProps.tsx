import React from "react";
import TiposProjetos from "../Utils/TiposProjetos";

interface ISelectInputProps {
    textDefault: string;
    name: string;
    id: string;
    required: boolean;
    values: Array<TiposProjetos>;
    disabled: boolean;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default ISelectInputProps;