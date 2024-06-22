import React from "react";

interface IInputProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    value: string | number | readonly string[] | undefined;
    disabled: boolean;
}

export default IInputProps;