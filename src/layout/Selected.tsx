import React from "react";
import ISelectInputProps from "../interfaces/ISelectInputProps"
import styles from "./Selected.module.css";

const Selected: React.FC<ISelectInputProps> = ({ textDefault, name, id, required,
    values,
    disabled,
    handleChange }) => {
    return (
        <select className={styles.select} name={name} id={id} onChange={handleChange}>
            <option disabled selected>{textDefault}</option>
            {values.map(value => (
                <option key={value.id} value={value.id}>{value.nome}</option>
            ))}
        </select>
    )
}

export default Selected;